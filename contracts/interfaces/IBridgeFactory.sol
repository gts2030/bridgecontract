pragma solidity 0.8.13;

interface IBridgeFactory {

    // function migrator() external view returns (address);

    function allTokens(uint256) external view returns (address token);

    function allTokensLength() external view returns (uint256);

    function deployToken(uint256 _chainId, string calldata _originAddress, string calldata _name, string calldata _symbol, uint8 _decimals)
        external
        returns (address token);

    // function setMigrator(address) external;
}