import { Typography, Box, Button } from "@mui/material";
import React from "react";

import etherIcon from "../../assets/etherIcon.svg";

const TOKEN_EXCHANGE_RATE = 150000;

interface SwapProps {
  chainId: number | undefined;
  provider: any;
}

function Swap({ chainId, provider }: SwapProps) {
  const [etherForSwap, setEtherForSwap] = React.useState("");
  const [tokenForSwap, setTokenForSwap] = React.useState("");

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
    if (event.target.value > 10) {
      setEtherForSwap("10");
      setTokenForSwap((10 * TOKEN_EXCHANGE_RATE).toString());
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
    if (event.target.value > 10 * TOKEN_EXCHANGE_RATE) {
      setTokenForSwap((10 * TOKEN_EXCHANGE_RATE).toString());
      setEtherForSwap("10");
      return;
    }

    // set ether and token values
    setTokenForSwap(event.target.value);
    // convert to ether
    const ether = event.target.value / TOKEN_EXCHANGE_RATE;
    // round to 2 decimal places
    setEtherForSwap((Math.round(ether * 100) / 100).toString());
  };

  const handleSwap = () => {
    if (chainId !== 42161) {
      alert("Please connect to Arbitrum");
    }
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
          backgroundColor: "white",
          color: "black",
          borderRadius: "15px",
          height: "40px",
          padding: "0 10px",
        }}
      >
        <input
          type="text"
          placeholder="0.00"
          pattern="[0-9]+"
          style={{
            border: "none",
            outline: "none",
            backgroundColor: "transparent",
            fontSize: "16px",
            fontFamily: "Inter",
            fontWeight: 700,
            color: "black",
            width: "100%",
          }}
          value={etherForSwap}
          onChange={handleOnChangeEther}
        />
        <Typography
          fontFamily="Inter"
          fontSize="16px"
          fontWeight={700}
          padding="8px 0px"
          margin="0 2px"
        >
          |
        </Typography>
        <img src={etherIcon} alt="ether" style={{ padding: "7px 0" }} />
        <Typography fontFamily="Inter" fontSize="16px" fontWeight={700} padding="8px 0px">
          ETH
        </Typography>
      </Box>
      <Typography fontFamily="Space" fontSize="16px">
        TO
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          backgroundColor: "white",
          color: "black",
          borderRadius: "15px",
          height: "40px",
          padding: "0 10px",
        }}
      >
        <input
          type="text"
          placeholder="0.00"
          pattern="[0-9]+"
          style={{
            border: "none",
            outline: "none",
            backgroundColor: "transparent",
            fontSize: "16px",
            fontFamily: "Inter",
            fontWeight: 700,
            color: "black",
            width: "100%",
          }}
          value={tokenForSwap}
          onChange={handleOnChangeToken}
        />
        <Typography
          fontFamily="Inter"
          fontSize="16px"
          fontWeight={700}
          padding="8px 0px"
          margin="0 15px"
        >
          |
        </Typography>

        <Typography fontFamily="Inter" fontSize="16px" fontWeight={700} padding="8px 0px">
          $GCR
        </Typography>
      </Box>
      <Button
        variant="contained"
        onClick={handleSwap}
        sx={{
          backgroundColor: "white",
          color: "black",
          borderRadius: "15px",
          height: "40px",
          width: "50%",
          marginTop: "25px",
          fontFamily: "Inter",
          fontWeight: 700,
          ":hover": {
            backgroundColor: "white",
          },
        }}
      >
        Buy $GCR
      </Button>
    </Box>
  );
}

export default Swap;
