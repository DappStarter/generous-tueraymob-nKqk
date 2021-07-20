require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock off tooth warrior ridge remind modify grace narrow furnace surge'; 
let testAccounts = [
"0x46fd84cf7ea36bebe06ecaf8b4eb04a1435108347466288be043f56ea473e480",
"0x5266e2f6ff46571d4a23609496f5c6fc492f215da5513d172b7f91af0adc169c",
"0xfc2df0cf0ebcf576d2c04bf1b52b61563285093aee598b15653fd67a291aebea",
"0xd49db1ec782aa4353f6b65747b82f153bfd89597a40011ab24007acb515e721f",
"0x4acdc663f3bb6f96fddd4e79ad2e3fbec4be5afb7a575a2f64b0ab6bb3687dec",
"0x1923a7a9eca9e386d805dd256d4909bf1fb08c377f94b89992c303533e8eaee8",
"0x1585df228c0a53a6a45ec0a23b58713cca41c92c73955e269654c8cd423aa8d6",
"0x4968bec0228c59fc2739e74cf6bc92300117764edf4bfbd2131be0df9b8d5f28",
"0x6e0dca45c0c8d50cc99e7b80ff109415e0db85bdf36018da32549e776958263c",
"0x0bd878162265ba13f7bcbff2083682414530dc6700e433f9bca2c84cae2e56c6"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


