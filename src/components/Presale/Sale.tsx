import React, { useEffect, useState } from "react";
import { Container, Typography, Box } from "@mui/material";
import ProgressBar from "./ProgressBar";
import ConnectWallet from "./ConnectWallet";
import { hooks, metaMask } from "../../connectors/metaMask";
import Swap from "./Swap";

const { useChainId, useAccounts, useIsActivating, useIsActive, useProvider } = hooks;

function Sale() {
  const chainId = useChainId();
  const accounts = useAccounts();
  const isActivating = useIsActivating();

  const isActive = useIsActive();

  const provider = useProvider();

  const [error, setError] = useState<Error | undefined>(undefined);

  // attempt to connect eagerly on mount
  useEffect(() => {
    metaMask.connectEagerly().catch(() => {
      console.debug("Failed to connect eagerly to metamask");
    });
  }, []);

  useEffect(() => {
    if (error) {
      console.error(error);
    }
  }, [error]);

  // on chainId change, change network to arbitrum
  useEffect(() => {
    if (chainId) {
      metaMask.activate(42161);
    }
  }, [chainId]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography fontFamily="Space" fontSize="40px" lineHeight="1">
        Public Sale
      </Typography>
      <Typography fontFamily="Inter" fontSize="16px" fontWeight={700} textAlign="center">
        1 GCR = 0.006 USDT
      </Typography>
      <Box marginTop="40px">
        <Typography
          fontFamily="Space"
          fontSize="40px"
          textAlign="center"
          lineHeight="1"
          letterSpacing="0.06em"
        >
          1 : 55 : 22 : 30
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
        ETH Raised 10 / 300
      </Typography>
      {isActive ? (
        <Swap chainId={chainId} provider={provider} />
      ) : (
        <ConnectWallet connector={metaMask} setError={setError} />
      )}
    </Box>
  );
}

export default Sale;
