pragma solidity ^0.5.0;

library Utils{
    
    function etherToWei(uint sumInEth) public pure returns(uint){
        return sumInEth * 1 ether;
    }

    function minuteToSeconds(uint timeInMin) public pure returns(uint){
        return timeInMin * 1 minutes;
    }
}