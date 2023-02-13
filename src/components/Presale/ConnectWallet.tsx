import React, { useEffect, useState } from "react";
import type { Connector } from "@web3-react/types";
import { Button } from "@mui/material";
import arbitrumChainParams from "../../constants/chains";

interface ConnectWalletProps {
  connector: Connector;
  setError: (error: Error | undefined) => void;
}

export default function ConnectWallet({ connector, setError }: ConnectWalletProps) {
  const handleClick = async () => {
    try {
      await connector.activate(arbitrumChainParams);
    } catch (err: any) {
      setError(err);
    }
  };

  return (
    <Button
      sx={{
        color: "white",
        fontSize: "14px",
        fontWeight: 700,
        textTransform: "capitalize",
        fontFamily: "Inter",
        border: "2px solid #6f5bde",
        borderRadius: "15px",
        paddingLeft: "25px",
        paddingRight: "15px",
      }}
      onClick={handleClick}
    >
      Connect Wallet
    </Button>
  );
}
