// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TrashCoin is ERC20 {
    constructor(uint256 initialSupply) ERC20("TrashCoin", "TRC") {
        require(initialSupply > 0, "Initial supply must be greater than 0");
        _mint(msg.sender, initialSupply * (10 ** decimals()));
    }
}
