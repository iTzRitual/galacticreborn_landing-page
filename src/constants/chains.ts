import type { AddEthereumChainParameter } from "@web3-react/types";

const arbitrumChainParams: AddEthereumChainParameter = {
  chainId: 42161,
  chainName: "Arbitrum",
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: ["https://arb1.arbitrum.io/rpc"],
  blockExplorerUrls: ["https://arbiscan.io/"],
};

const goerliChainParams: AddEthereumChainParameter = {
  chainId: 5,
  chainName: "Goerli Testnet",
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: ["https://goerli.infura.io/v3/"],
  blockExplorerUrls: ["https://goerli.etherscan.io"],
};

export { arbitrumChainParams, goerliChainParams };
