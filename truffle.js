const HDWalletProvider = require('truffle-hdwallet-provider-klaytn')
const NETWORK_ID = '1001'
const GASLIMIT = '20000000'
const URL = 'https://api.baobab.klaytn.net:8651'
const PRIVATE_KEY = '0xcd0481e4ba0af63374db94dcf50fa6f540a7a243b8568699119924110eadac4f'

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