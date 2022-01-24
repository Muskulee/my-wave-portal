//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract WavePortal {
    uint256 totalWaves;

    //event are intermediates for logging transactions easily
    event NewWave(address indexed from, uint256 timestamp, string message);

    //a struct is a customisable datatype
    struct Wave {
        address waver;
        string message;
        uint256 timestamp;
    }
    // string[] totalWavers;

    //declare wave array for storing waves and its message

    Wave[] waves;

    constructor() payable {
        console.log(
            "Hello World, I am excited about building and implementing my SmartContract"
        );
        console.log(
            "Now Edited and it is in its final phase"
        );
    }

    function wave(string memory _message) public {
        totalWaves += 1;
        console.log("%s has waved w/ message", msg.sender, _message);

    waves.push(Wave(msg.sender, _message, block.timestamp));

    emit NewWave(msg.sender, block.timestamp, _message);


//section 4 lesson for gifting users ethers

    uint256 prizeAmount = 0.0001 ether;
    require(prizeAmount <= address(this).balance, 
    "Trying to withdraw more money than the contract has.");
    
    (bool success, ) = (msg.sender).call{value: prizeAmount}("");
    require(success, "Failed to withdraw from contact");


    }

    //add a new function to get all Waves

    function getAllWaves() public view returns (Wave[] memory){
        return waves;
    }

    function getTotalWaves() public view returns (uint256) {
        console.log("We have %d Total Waves", totalWaves);
        return totalWaves;
    }

    // function getTotalWavers() public view returns (string[] memory) {
    //     return totalWavers;
    // }

    // function storeNewWaver(string calldata _waver) public {
    //     totalWavers.push(_waver);
    //     console.log("%s Saved", _waver);
    // }
}
