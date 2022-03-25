//SPDX-License-Identifier: MIT
pragma solidity 0.8.13;

interface IWrappedToken {
	function getOrigin() external view returns (uint256, string memory);

	function getChainId() external view returns (uint256);

	function getOriginAddr() external view returns (string memory);

	function mint(address account, uint256 amount) external;

	function burnFrom(address account, uint256 amount) external;
}