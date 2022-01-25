


require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: process.env.STAGING_ALCHEMY_WEBSITE_KEY,
      accounts: [process.env.ACCOUNT_PRIVATE_KEY],
    },
    mainnet: {
      chainId: 1,
      url: process.env.PROD_ALCHEMY_KEY_WEBSITE,
      accounts: [process.env.ACCOUNT_PRIVATE_KEY],
    },
  },
};