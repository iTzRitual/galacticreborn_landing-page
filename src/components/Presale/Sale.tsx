/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { ethers } from "ethers";
import ProgressBar from "./ProgressBar";
import ConnectWallet from "./ConnectWallet";

import Swap from "./Swap";
import { arbitrumChainParams } from "../../constants/chains";
import TransparentButton from "../TranspapentButton";
import { parseTime } from "../../utils";

interface SwitchChainOrSwapProps {
  chainId: number | undefined;
  provider: any;
  connector: any;
  contract: ethers.Contract | undefined;
  startTime: number | undefined;
}

function SwitchChainOrSwap({
  chainId,
  provider,
  connector,
  contract,
  startTime,
}: SwitchChainOrSwapProps) {
  const handleClick = async () => {
    try {
      connector.activate(arbitrumChainParams);
    } catch (err: any) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  };
  return chainId === 5 ? (
    (startTime && startTime < new Date().getTime() && (
      <Swap chainId={chainId} provider={provider} contract={contract} />
    )) || <> </>
  ) : (
    <TransparentButton marginTop="20px" onClick={handleClick} text="Add or switch network" />
  );
}

interface SaleProps {
  connector: any;
  setError: (error: Error | undefined) => void;
  chainId: number | undefined;
  provider: any;
  isActive: boolean;
  contractBalance: string | undefined;
  startTime: number | undefined;
  endTime: number | undefined;
  contract: ethers.Contract | undefined;
}

function Sale({
  connector,
  setError,
  chainId,
  provider,
  isActive,
  contractBalance,
  startTime,
  endTime,
  contract,
}: SaleProps) {
  const [parsedStartTime, setParsedStartTime] = React.useState<string | undefined>(undefined);

  useEffect(() => {
    if (connector) {
      connector.connectEagerly();
    }
  }, [connector]);

  // run evry 1 second
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      if (startTime) {
        if (startTime > now) setParsedStartTime(parseTime(new Date(Number(startTime) * 1000)));
      }
      if (endTime) {
        if (endTime < now) setParsedStartTime(parseTime(new Date(Number(endTime) * 1000)));
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [startTime, endTime]);

  // on chainId change, change network to arbitrum
  // useEffect(() => {
  //   if (chainId) {
  //     connector.activate(arbitrumChainParams);
  //   }
  // }, [chainId, connector]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minWidth: "400px",
      }}
    >
      <Typography fontFamily="Space" fontSize="40px" lineHeight="1">
        Presale
      </Typography>
      <Typography fontFamily="Inter" fontSize="16px" fontWeight={700} textAlign="center">
        1 ETH = 150000 $GCR
      </Typography>
      <Box marginTop="40px">
        <Typography
          fontFamily="Space"
          fontSize="40px"
          textAlign="center"
          lineHeight="1"
          letterSpacing="0.06em"
        >
          {parsedStartTime}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography fontFamily="Inter" fontSize="16px">
            Days
          </Typography>
          <Typography fontFamily="Inter" fontSize="16px">
            Hours
          </Typography>
          <Typography fontFamily="Inter" fontSize="16px">
            Minutes
          </Typography>
          <Typography fontFamily="Inter" fontSize="16px">
            Seconds
          </Typography>
        </Box>
      </Box>
      <Typography
        fontFamily="Inter"
        fontSize="16px"
        fontWeight={700}
        textAlign="center"
        marginBottom="30px"
      >
        Remaining Until Sale Ends
      </Typography>
      <ProgressBar actualEth={10} totalEth={300} />
      <Typography
        fontFamily="Inter"
        fontSize="16px"
        fontWeight={700}
        lineHeight={2}
        textAlign="center"
      >
        ETH Raised {contractBalance} / 300
      </Typography>
      {isActive ? (
        <SwitchChainOrSwap
          chainId={chainId}
          provider={provider}
          connector={connector}
          contract={contract}
          startTime={startTime}
        />
      ) : (
        <ConnectWallet connector={connector} setError={setError} />
      )}
    </Box>
  );
}

export default Sale;
