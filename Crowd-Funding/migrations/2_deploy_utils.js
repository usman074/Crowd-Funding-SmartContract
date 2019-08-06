let Utils = artifacts.require("./Utils.sol");
let CrowdFundingWithDeadline = artifacts.require("./CrowdFundingWithDeadline.sol");

module.exports = async (deployer)=>{
    await deployer.deploy(Utils);
    deployer.link(Utils, CrowdFundingWithDeadline);
}