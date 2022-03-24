//SPDX-License-Identifier: Apache-2.0
pragma solidity 0.8.13;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract WrappedToken is ERC20 {
	uint256 MAX_UINT = 2**4 - 1; // TODO : 나중에 2**256-1로 해야함
	uint256 private chainId; // TODO : chainid의 uint크기 확인하여 적용하기 
	string private originAddress;
	uint8 private originDecimals;
	address private factoryAddress;
	
	// This override ensures we return the proper number of decimals
	// for the original token
	function decimals() public view virtual override returns (uint8) {
		return originDecimals;
	}

	// This is not an accurate total supply. Instead this is the total supply
	// of the given asset on Over at this moment in time. Keeping
	// a totally accurate supply would require constant updates from the other chain
	// side, while in theory this could be piggy-backed on some existing bridge
	// operation it's a lot of complextiy to add so we chose to forgoe it.
	function totalSupply() public view virtual override returns (uint256) {
		return MAX_UINT - balanceOf(factoryAddress);
	}

	function getOrigin() public view returns (uint256, string memory) {
		return (chainId, originAddress);
	}

	function getChainId() public view returns (uint256) {
		return chainId;
	}

	function getOriginAddr() public view returns (string memory) {
		return originAddress;
	}

	constructor(
		uint256 _chainId,
		string memory _originAddress,
		string memory _name,
		string memory _symbol,
		uint8 _decimals
	) ERC20(_name, _symbol) {
		factoryAddress = msg.sender;
		chainId = _chainId;
		originAddress = _originAddress;
		originDecimals = _decimals;
		_mint(factoryAddress, MAX_UINT); // 이렇게 맥스로 만들어 둘것인지 확인 -> 이러면 오버 관리자가 돈을 사기로 더 찍어낼 수 있는거 아닌가
	}
}
