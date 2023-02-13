import React from "react";
import type { Connector } from "@web3-react/types";
import { arbitrumChainParams, goerliChainParams } from "../../constants/chains";
import TransparentButton from "../TranspapentButton";

interface ConnectWalletProps {
  connector: Connector;
  setError: (error: Error | undefined) => void;
}

export default function ConnectWallet({ connector, setError }: ConnectWalletProps) {
  const handleClick = async () => {
    try {
      await connector.activate(goerliChainParams);
    } catch (err: any) {
      setError(err);
    }
  };

  return <TransparentButton onClick={handleClick} text="Connect wallet" marginTop="40px" />;
}
