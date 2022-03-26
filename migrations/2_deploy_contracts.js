const Token = artifacts.require("Token");
const DAO = artifacts.require("DAO");

module.exports = async function (deployer) {
  await deployer.deploy(Token);
  await deployer.deploy(DAO);
};