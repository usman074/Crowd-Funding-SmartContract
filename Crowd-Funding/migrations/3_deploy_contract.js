let CrowdFundingWithDeadline = artifacts.require("./CrowdFundingWithDeadline.sol");

module.exports = async (deployer)=>{
    await deployer.deploy(CrowdFundingWithDeadline,"Test Campaign", 1 , 2, "0xD3b2A24EF8cd68a8DD6cFd656ba2BB038B853D81");
}