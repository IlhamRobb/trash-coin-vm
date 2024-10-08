const TrashCoin = artifacts.require("TrashCoin");

module.exports = function (deployer) {
  deployer.deploy(TrashCoin, 1000); // 1 juta TrashCoin
};
