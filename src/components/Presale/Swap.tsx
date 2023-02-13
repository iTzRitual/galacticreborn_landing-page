/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-restricted-globals */
import { Typography, Box } from "@mui/material";
import React from "react";
import { ethers } from "ethers";

import toast from "react-hot-toast";
import etherIcon from "../../assets/etherIcon.svg";
import TransparentInput from "../TranspapentInput";
import TransparentButton from "../TranspapentButton";
import { parseErrorMessage } from "../../utils";

const TOKEN_EXCHANGE_RATE = 150000;

interface SwapProps {
  chainId: number | undefined;
  provider: any;
  contract: ethers.Contract | undefined;
}

function Swap({ chainId, provider, contract }: SwapProps) {
  const [etherForSwap, setEtherForSwap] = React.useState("");
  const [tokenForSwap, setTokenForSwap] = React.useState("");

  const handleSwap = async () => {
    if (chainId !== 5) {
      toast.error("Please connect to Arbitrum");
      return;
    }
    if (!provider) {
      toast.error("Please connect to wallet");
      return;
    }
    if (!contract) {
      toast.error("Contract not found");
      return;
    }
    if (etherForSwap === "") {
      toast.error("Please enter ether amount");
      return;
    }

    try {
      const value = ethers.parseEther(etherForSwap);
      const txBuy = await contract.buyTokens({
        value,
      });

      await provider.waitForTransaction(txBuy.hash);

      toast.success("Transaction successful");
    } catch (err: any) {
      // check tx reverted reason
      if (err.reason) {
        toast.error(parseErrorMessage(err.reason));
      } else {
        toast.error("Transaction failed");
      }
    }
  };

  const handleOnChangeEther = (event: any) => {
    event.preventDefault();
    // check if input is number
    if (isNaN(event.target.value)) {
      setEtherForSwap("");
      return;
    }

    // check if input is negative
    if (event.target.value < 0) {
      return;
    }

    // check if input is too big
    if (event.target.value > 1) {
      setEtherForSwap("1");
      setTokenForSwap((1 * TOKEN_EXCHANGE_RATE).toString());
      return;
    }

    // set ether and token values
    setEtherForSwap(event.target.value);
    // convert to token
    setTokenForSwap((event.target.value * TOKEN_EXCHANGE_RATE).toString());
  };

  const handleOnChangeToken = (event: any) => {
    event.preventDefault();
    // check if input is number
    if (isNaN(event.target.value)) {
      setTokenForSwap("");
      return;
    }

    // check if input is negative
    if (event.target.value < 0) {
      return;
    }

    // check if input is too big
    if (event.target.value > 1 * TOKEN_EXCHANGE_RATE) {
      setTokenForSwap((1 * TOKEN_EXCHANGE_RATE).toString());
      setEtherForSwap("1");
      return;
    }

    // set ether and token values
    setTokenForSwap(event.target.value);
    // convert to ether
    const ether = event.target.value / TOKEN_EXCHANGE_RATE;
    // round to 2 decimal places
    setEtherForSwap((Math.round(ether * 100) / 100).toString());
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        rowGap: "5px",
        maxWidth: "300px",
        marginTop: "15px",
      }}
    >
      <Typography fontFamily="Space" fontSize="16px">
        Swap
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          color: "black",
          borderRadius: "15px",
          height: "40px",
          padding: "0 10px",
        }}
      >
        <TransparentInput onChange={handleOnChangeEther} value={etherForSwap}>
          <Typography fontFamily="Inter" fontSize="16px" fontWeight={700} margin="-2px 2px">
            |
          </Typography>
          <img
            src={etherIcon}
            alt="ether"
            style={{ width: "20px", height: "20px", marginRight: "3px" }}
          />
          <Typography fontFamily="Inter" fontSize="16px" fontWeight={700} marginTop="-2px">
            ETH
          </Typography>
        </TransparentInput>
      </Box>
      <Typography fontFamily="Space" fontSize="16px">
        TO
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          color: "black",
          borderRadius: "15px",
          height: "40px",
          padding: "0 10px",
        }}
      >
        <TransparentInput onChange={handleOnChangeToken} value={tokenForSwap}>
          <Typography fontFamily="Inter" fontSize="16px" fontWeight={700} margin="-2px 7px">
            |
          </Typography>

          <Typography fontFamily="Inter" fontSize="16px" fontWeight={700} marginTop="-2px">
            $GCR
          </Typography>
        </TransparentInput>
      </Box>
      <TransparentButton text="Buy $GCR" marginTop="20px" onClick={handleSwap} />
    </Box>
  );
}

export default Swap;
