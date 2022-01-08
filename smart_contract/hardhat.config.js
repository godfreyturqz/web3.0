require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/Ifcw1rDZoGaQu_29qv-r3Mqj21DAUIaV', //URL from alchemy
      accounts: ['c892f0d197ec2b85cf4afaacf0a60e9d5079df8856fe6024ea07e85cf54b6d1a'], //meta mask private key
    },
  },
};