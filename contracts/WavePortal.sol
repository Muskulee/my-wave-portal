//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract WavePortal {

    uint256 totalWaves;

    string[] totalWavers;

    constructor(){
        console.log("Hello World, I am excited about building and implementing my SmartContract");
    }

    function wave() public {
        totalWaves += 1;
        console.log("%s has waved", msg.sender);

    }

    function getTotalWaves() public view returns(uint256){
        console.log("We have %d Total Waves", totalWaves);
        return totalWaves;
    }


    function getTotalWavers() public view returns(string[] memory){

        return totalWavers;
    }

    function storeNewWaver(string calldata _waver) public {
        totalWavers.push(_waver);
        console.log("%s Saved", _waver);
    }


   



}