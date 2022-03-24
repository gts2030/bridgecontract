pragma solidity 0.8.13;

import "hardhat/console.sol";
import "../interfaces/IBridgeFactory.sol";
import "./WrappedToken.sol";

contract BridgeFactory is IBridgeFactory {
    address public owner;
    mapping(uint256 => mapping(string => address)) public getToken;
    address[] public allTokens;

    event ERC20DeployedEvent(
		address indexed _tokenContract,
        uint256 _chainId,
        string _originAddress,
		string _name,
		string _symbol,
		uint8 _decimals
	);

    constructor() {
		owner = msg.sender;
	}

    function getCreationBytecode(uint256 _chainId, string memory _originAddress, 
    string memory _name, string memory _symbol,	uint8 _decimals) public pure returns (bytes memory) {
        bytes memory bytecode = type(WrappedToken).creationCode;

        return abi.encodePacked(bytecode, abi.encode(_chainId, _originAddress, _name, _symbol, _decimals));
    }
    
    function deployToken(uint256 _chainId, string calldata _originAddress, string calldata _name, string calldata _symbol, uint8 _decimals)
        external
        returns (address token)
    {   
        // 토큰 최초 생성하는 주체를 유져로 그냥 둘것인가 아니면 제한할 것인가
        // require(msg.sender == migrator);
        require(
            getToken[_chainId][_originAddress] == address(0),
            "CrossOver: TOKEN_EXISTS"
        );

        ////////////////////////////////////////////////////////////////
        // merkle proof process of token state should be located here //
        ////////////////////////////////////////////////////////////////
        bytes memory bytecode = getCreationBytecode(_chainId, _originAddress, _name, _symbol, _decimals);
        bytes32 salt = keccak256(abi.encodePacked(_chainId, _originAddress));
        assembly {
            token := create2(0, add(bytecode, 32), mload(bytecode), salt)
        }

        getToken[_chainId][_originAddress] = token;
        allTokens.push(token);
        emit ERC20DeployedEvent(token, _chainId, _originAddress, _name, _symbol, _decimals);
        console.log(token);
        return token;
    }

    function allTokensLength() external view returns (uint256) {
        return allTokens.length;
    }
}