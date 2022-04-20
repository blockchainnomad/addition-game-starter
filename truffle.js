const HDWalletProvider = require('truffle-hdwallet-provider-klaytn')
const fs = require('fs');
const NETWORK_ID = '1001'
const GASLIMIT = '20000000'
const URL = 'https://api.baobab.klaytn.net:8651'
const PRIVATE_KEY = fs.readFileSync('.secret').toString().trim();

module.exports = {
    networks: {
        klaytn: {
            provider: new HDWalletProvider(PRIVATE_KEY, URL),
            network_id: NETWORK_ID,
            gas: GASLIMIT,
            gasPrice: null,
        }
    },

    compilers: {
        solc: {
            version: '0.4.25'
        }
    }
}