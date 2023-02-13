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

export default arbitrumChainParams;
