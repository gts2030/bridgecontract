//SPDX-License-Identifier: Apache-2.0
pragma solidity 0.8.13;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "../interfaces/IWrappedToken.sol";

contract WrappedToken is ERC20, Ownable, IWrappedToken{
	uint256 private chainId; // TODO : chainid의 uint크기 확인하여 적용하기 / string 일수도 있음
	string private originAddress;
	uint8 private originDecimals;
	
	// This override ensures we return the proper number of decimals
	// for the original token
	function decimals() public view virtual override(ERC20) returns (uint8) {
		return originDecimals;
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

	function mint(address account, uint256 amount) external onlyOwner {
		_mint(account, amount);
	}

	function burnFrom(address account, uint256 amount) external onlyOwner {
        _spendAllowance(account, _msgSender(), amount);
        _burn(account, amount);
    }

	constructor(
		uint256 _chainId,
		string memory _originAddress,
		string memory _name,
		string memory _symbol,
		uint8 _decimals
	) ERC20(_name, _symbol) {
		chainId = _chainId;
		originAddress = _originAddress;
		originDecimals = _decimals;
	}
}
