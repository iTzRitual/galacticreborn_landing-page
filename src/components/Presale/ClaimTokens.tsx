import { Box, Typography } from "@mui/material";
import { ethers } from "ethers";
import React, { useCallback, useEffect, useState } from "react";
import { Connector } from "@web3-react/types";
import toast from "react-hot-toast";
import ConnectWallet from "./ConnectWallet";
import TransparentButton from "../TranspapentButton";
import { parseErrorMessage } from "../../utils";

interface ClaimTokensProps {
  connector: Connector;
  setError: (error: Error | undefined) => void;
  isActive: boolean;
  chainId: number | undefined;
  userVesting: Array<number> | undefined;
  contract: ethers.Contract | undefined;
  provider: any;
  startVesting: number | undefined;
  endVesting: number | undefined;
  isTGE: boolean | undefined;
}

const BASE_TOKEN = 10 ** 18;

function ClaimTokens({
  connector,
  provider,
  setError,
  chainId,
  isActive,
  userVesting,
  contract,
  startVesting,
  endVesting,
  isTGE,
}: ClaimTokensProps) {
  const [totalAmount, setTotalAmount] = useState(0);
  const [claimedAmount, setClaimedAmount] = useState(0);
  const [lastClaimed, setLastClaimed] = useState(0);

  const parseUserVesting = useCallback(() => {
    if (!userVesting) {
      return;
    }
    setTotalAmount(Number(userVesting[0]) / BASE_TOKEN);
    setClaimedAmount(Number(userVesting[2]) / BASE_TOKEN);
    setLastClaimed(Number(userVesting[3]) * 1000);
  }, [userVesting]);

  const calculateAvailableToClaim = () => {
    const now = new Date().getTime();
    const timePassed = now - lastClaimed;
    const timePassedInTwoMonths = timePassed / 1000 / 60 / 60 / 24 / 30 / 2;
    const availableToClaim = timePassedInTwoMonths * ((totalAmount * 20) / 100);

    if (isTGE && claimedAmount === 0 && timePassedInTwoMonths > 0) {
      return Math.round(availableToClaim + (totalAmount * 20) / 100);
    }

    if (isTGE && claimedAmount === 0 && startVesting) {
      return Math.round((totalAmount * 20) / 100);
    }

    if (isTGE && claimedAmount > 0 && timePassedInTwoMonths > 0) {
      return Math.round(availableToClaim);
    }

    if (endVesting && endVesting > now) {
      return Math.round(totalAmount - claimedAmount);
    }

    return 0;
  };

  // calculate next claim date
  const calculateNextClaimDate = () => {
    let nextClaim = lastClaimed + 1000 * 60 * 60 * 24 * 30 * 2;

    if (lastClaimed === startVesting) {
      nextClaim = lastClaimed + 1000 * 60 * 60 * 24 * 30 * 4;
    }

    const newDate = new Date(nextClaim);
    // return in format: 01.01.2021
    return `${newDate.getDate()}.${newDate.getMonth() + 1}.${newDate.getFullYear()}`;
  };

  const handleClaim = async () => {
    if (!contract) {
      return;
    }
    try {
      const tx = await contract.claimTokens();

      await provider.waitForTransaction(tx.hash);

      toast.success("Tokens claimed");
    } catch (err: any) {
      // check if user rejected tx
      if (err.reason) {
        toast.error(parseErrorMessage(err.reason));
      } else {
        toast.error("Transaction failed");
      }
    }
  };

  useEffect(() => {
    parseUserVesting();
  }, [parseUserVesting]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minWidth: "400px",
        height: "100%",
      }}
    >
      <Typography fontFamily="Space" fontSize="26px">
        Claim Tokens
      </Typography>
      {isActive && chainId === 5 ? (
        <>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              marginTop: "50px",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "start",
              }}
            >
              <Typography fontFamily="Inter" fontSize="16px" fontWeight={700} textAlign="center">
                Your tokens:
              </Typography>
              <Typography
                fontFamily="Inter"
                fontSize="16px"
                fontWeight={700}
                textAlign="center"
                color="#FFBA52"
              >
                Already claimed:
              </Typography>
              <Typography
                fontFamily="Inter"
                fontSize="16px"
                fontWeight={700}
                textAlign="center"
                color="#8EFD00"
              >
                Available to claim:
              </Typography>
              <Typography fontFamily="Inter" fontSize="16px" fontWeight={700} textAlign="center">
                Next claim:
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "end",
                alignItems: "end",
              }}
            >
              <Typography fontFamily="Inter" fontSize="16px" fontWeight={700} textAlign="center">
                {Math.round(totalAmount)} $GCR
              </Typography>
              <Typography
                fontFamily="Inter"
                fontSize="16px"
                fontWeight={700}
                textAlign="center"
                color="#FFBA52"
              >
                {Math.round(claimedAmount)} $GCR
              </Typography>
              <Typography
                fontFamily="Inter"
                fontSize="16px"
                fontWeight={700}
                textAlign="center"
                color="#8EFD00"
              >
                {calculateAvailableToClaim()} $GCR
              </Typography>
              <Typography fontFamily="Inter" fontSize="16px" fontWeight={700} textAlign="center">
                {calculateNextClaimDate()}
              </Typography>
            </Box>
          </Box>
          <TransparentButton marginTop="40px" onClick={handleClaim} text="Claim $GCR" />
        </>
      ) : (
        <ConnectWallet connector={connector} setError={setError} />
      )}
    </Box>
  );
}

export default ClaimTokens;
