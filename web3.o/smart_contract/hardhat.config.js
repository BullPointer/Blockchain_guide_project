// https://eth-sepolia.g.alchemy.com/v2/CQ9GjL74hMxMhteaEUA3Rtk5aNW-Dxtq

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/CQ9GjL74hMxMhteaEUA3Rtk5aNW-Dxtq",
      accounts: ["ab3aa7357c861bf20648016f4bf9aec21cfad8e7da7ce29790df7eab8e671969"]
    }
  }
}
