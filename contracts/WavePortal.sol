//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract WavePortal {
    uint256 totalWaves;

    /**
    declare the seed identifier
     */

    uint256 private seed;

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

    /**add a new datatype to prevent spamming */

    mapping(address => uint256) public lastWavedAt;

    constructor() payable {
        console.log(
            "Hello World, I am excited about building and implementing my SmartContract"
        );
        console.log("Now Edited and it is in its final phase");

        //setting the seed for randomness of winner
        seed = (block.timestamp + block.difficulty) % 100;
    }

    function wave(string memory _message) public {

        /**add
        
        
        endure the current tome stamp is 15 minutes greater */

        require(
            lastWavedAt[msg.sender] + 15 minutes < block.timestamp,
                    "WAIT 15m");


                            /*
         * Update the current timestamp we have for the user
         */
        lastWavedAt[msg.sender] = block.timestamp;


        totalWaves += 1;
        console.log("%s has waved w/ message", msg.sender, _message);

        waves.push(Wave(msg.sender, _message, block.timestamp));

        

        /**
        Generate seed for the next user
         */

        seed = (block.timestamp + block.difficulty) % 100;

        console.log("Random # generated: %d", seed);

        if (seed <= 50) {
            console.log("%s Won!", msg.sender);

            //section 4 lesson for gifting users ethers

            uint256 prizeAmount = 0.0001 ether;
            require(
                prizeAmount <= address(this).balance,
                "Trying to withdraw more money than the contract has."
            );

            (bool success, ) = (msg.sender).call{value: prizeAmount}("");
            require(success, "Failed to withdraw from contact");
        }

        emit NewWave(msg.sender, block.timestamp, _message);
    }

    //add a new function to get all Waves

    function getAllWaves() public view returns (Wave[] memory) {
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
