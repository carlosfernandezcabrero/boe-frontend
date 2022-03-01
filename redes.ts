export interface Red {
  name: string;
  chainId: number;
  shortName: string;
  chain: string;
  network: string;
  networkId: number;
  nativeCurrency: { name: string; symbol: string; decimals: number };
  rpc: string[];
  faucets: string[];
  infoURL: string;
}

export type EntornosDeRed = 'mainnet' | 'testnet';
export type Redes = Record<EntornosDeRed, Red[]>;

export const REDES: Redes = {
  mainnet: [
    {
      name: 'Ethereum Mainnet',
      chainId: 1,
      shortName: 'eth',
      chain: 'ETH',
      network: 'mainnet',
      networkId: 1,
      nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
      rpc: [
        'https://mainnet.infura.io/v3/${INFURA_API_KEY}',
        'wss://mainnet.infura.io/ws/v3/${INFURA_API_KEY}',
        'https://api.mycryptoapi.com/eth',
        'https://cloudflare-eth.com',
      ],
      faucets: [],
      infoURL: 'https://ethereum.org',
    },
    {
      name: 'Matic Mainnet',
      chainId: 137,
      shortName: 'matic',
      chain: 'Matic',
      network: 'mainnet',
      networkId: 137,
      nativeCurrency: { name: 'Matic', symbol: 'MATIC', decimals: 18 },
      rpc: ['https://rpc-mainnet.matic.network', 'wss://ws-mainnet.matic.network'],
      faucets: [],
      infoURL: 'https://matic.network/',
    },
    {
      name: 'Binance Smart Chain Mainnet',
      chainId: 56,
      shortName: 'bnb',
      chain: 'BSC',
      network: 'mainnet',
      networkId: 56,
      nativeCurrency: { name: 'Binance Chain Native Token', symbol: 'BNB', decimals: 18 },
      rpc: [
        'https://bsc-dataseed1.binance.org',
        'https://bsc-dataseed2.binance.org',
        'https://bsc-dataseed3.binance.org',
        'https://bsc-dataseed4.binance.org',
        'https://bsc-dataseed1.defibit.io',
        'https://bsc-dataseed2.defibit.io',
        'https://bsc-dataseed3.defibit.io',
        'https://bsc-dataseed4.defibit.io',
        'https://bsc-dataseed1.ninicoin.io',
        'https://bsc-dataseed2.ninicoin.io',
        'https://bsc-dataseed3.ninicoin.io',
        'https://bsc-dataseed4.ninicoin.io',
        'wss://bsc-ws-node.nariox.org',
      ],
      faucets: [],
      infoURL: 'https://www.binance.org',
    },
  ],
  testnet: [
    {
      name: 'Ethereum Testnet Ropsten',
      chainId: 3,
      shortName: 'rop',
      chain: 'ETH',
      network: 'ropsten',
      networkId: 3,
      nativeCurrency: { name: 'Ropsten Ether', symbol: 'ROP', decimals: 18 },
      rpc: ['https://ropsten.infura.io/v3/${INFURA_API_KEY}', 'wss://ropsten.infura.io/ws/v3/${INFURA_API_KEY}'],
      faucets: ['https://faucet.ropsten.be?${ADDRESS}'],
      infoURL: 'https://github.com/ethereum/ropsten',
    },
    {
      name: 'Matic Testnet Mumbai',
      chainId: 80001,
      shortName: 'maticmum',
      chain: 'Matic',
      network: 'testnet',
      networkId: 80001,
      nativeCurrency: { name: 'Matic', symbol: 'tMATIC', decimals: 18 },
      rpc: ['https://rpc-mumbai.matic.today', 'wss://ws-mumbai.matic.today'],
      faucets: ['https://faucet.matic.network/'],
      infoURL: 'https://matic.network/',
    },
    {
      name: 'Binance Smart Chain Testnet',
      chainId: 97,
      shortName: 'bnbt',
      chain: 'BSC',
      network: 'Chapel',
      networkId: 97,
      nativeCurrency: { name: 'Binance Chain Native Token', symbol: 'tBNB', decimals: 18 },
      rpc: [
        'https://data-seed-prebsc-1-s1.binance.org:8545',
        'https://data-seed-prebsc-2-s1.binance.org:8545',
        'https://data-seed-prebsc-1-s2.binance.org:8545',
        'https://data-seed-prebsc-2-s2.binance.org:8545',
        'https://data-seed-prebsc-1-s3.binance.org:8545',
        'https://data-seed-prebsc-2-s3.binance.org:8545',
      ],
      faucets: ['https://testnet.binance.org/faucet-smart'],
      infoURL: 'https://testnet.binance.org/',
    },
  ],
};
