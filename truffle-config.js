require('dotenv').config();

const HDWalletProvider = require('truffle-hdwallet-provider-privkey');
// const privateKeys = process.env.PRIVATE_KEYS || "";
const privateKeys = "c0b95d6ace5125e72d13b90488ec16ad8f3f20330f508f5b86b3018b112875a9";

module.exports = {

  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" //match any network id
    },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(
          privateKeys, // array of private keys
          `https://rinkeby.infura.io/v3/${process.env.INFURA_API_KEY}` // Url to an Ethereum node
        )
      },
      gas: 5000000,
      gasPrice: 25000000000,
      network_id: 4
    },
    fuji: {
      provider: () => {
        return new HDWalletProvider({
          privateKeys: privateKeys.split(','),
          providerOrUrl: 'https://api.avax-test.network/ext/bc/C/rpc',
        });
      },
      network_id: 43113,
      gas: 3000000,
      gasPrice: 225000000000,
    },
  },
  contracts_directory: './src/contracts',
  contracts_build_directory: './src/abis',

  // Configure your compilers
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      },
      version: "^0.8.0" 
    }
  }
};