import React, { useCallback, useEffect, useState } from "react";
import { Box, Container } from "@mui/material";
import { ethers } from "ethers";
import Sale from "./Sale";
import Line from "./components_Presale/Line";
import BlurBox from "./components_Presale/BlurBox";
import ClaimTokens from "./ClaimTokens";
import contractABI from "../../constants/abi";
import { hooks, metaMask } from "../../connectors/metaMask";

const { useChainId, useAccounts, useIsActive, useProvider } = hooks;

function PresaleBox() {
  const chainId = useChainId();
  const accounts = useAccounts();
  const isActive = useIsActive();
  const provider = useProvider();
  const [error, setError] = useState<Error | undefined>(undefined);
  const [contract, setContract] = useState<ethers.Contract | undefined>(undefined);
  const [pool, setPool] = useState<string | undefined>(undefined);
  const [startTime, setStartTime] = useState<number | undefined>(undefined);
  const [endTime, setEndTime] = useState<number | undefined>(undefined);
  const [contractBalance, setContractBalance] = useState<string | undefined>(undefined);
  const [userVesting, setUserVesting] = useState<Array<number> | undefined>(undefined);
  const [isTGE, setIsTGE] = useState<boolean | undefined>(undefined);
  const [startVesting, setStartVesting] = useState<number | undefined>(undefined);
  const [endVesting, setEndVesting] = useState<number | undefined>(undefined);

  const getContract = useCallback(async () => {
    if (provider && chainId) {
      const signer = provider.getSigner();

      const contractTemp = new ethers.Contract(
        "0xEd0210f962425D49ADFB392025d4540Bdd21",
        contractABI,
        signer as any
      );
      setContract(contractTemp);
    }
  }, [chainId, provider]);

  const getContractBalance = useCallback(async () => {
    if (contract) {
      const balance = await contract.ethRaised();
      setContractBalance(ethers.formatEther(balance.toString()));
    }
  }, [contract]);

  const getUserVesting = useCallback(async () => {
    if (contract && accounts) {
      const vesting = await contract.userVesting(accounts[0]);
      setUserVesting(vesting);
    }
  }, [contract, accounts]);

  const getTGEStatus = useCallback(async () => {
    if (contract) {
      const status = await contract.isTGE();
      setIsTGE(status);
    }
  }, [contract]);

  const getVestingTime = useCallback(async () => {
    if (contract) {
      const start = await contract.vestingStartTime();
      setStartVesting(start);
      const end = await contract.vestingEndTime();
      setEndVesting(end);
    }
  }, [contract]);

  const getPresalePool = useCallback(async () => {
    if (contract) {
      const poolTemp = await contract.pool();
      setPool(poolTemp);
      setStartTime(poolTemp.startTime);
      setEndTime(poolTemp.endTime);
    }
  }, [contract]);

  useEffect(() => {
    getContract();
  }, [getContract]);

  useEffect(() => {
    getPresalePool();
    getTGEStatus();
    getVestingTime();
  }, [getPresalePool, getTGEStatus, getVestingTime]);

  useEffect(() => {
    getContractBalance();
    getUserVesting();
    // every 10 seconds
    const interval = setInterval(() => {
      getContractBalance();
      getUserVesting();
    }, 10000);
    return () => clearInterval(interval);
  }, [getContractBalance, getUserVesting]);

  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          width: "65%",
          minHeight: "600px",
          minWidth: "900px",
          color: "white",
          position: "relative",
        }}
      >
        <Sale
          chainId={chainId}
          provider={provider}
          isActive={isActive}
          connector={metaMask}
          setError={setError}
          contractBalance={contractBalance}
          startTime={startTime}
          endTime={endTime}
          contract={contract}
        />
        {userVesting && Number(userVesting[0]) !== 0 && (
          <>
            <Line />
            <ClaimTokens
              connector={metaMask}
              setError={setError}
              chainId={chainId}
              isActive={isActive}
              userVesting={userVesting}
              contract={contract}
              provider={provider}
              isTGE={isTGE}
              startVesting={startVesting}
              endVesting={endVesting}
            />
          </>
        )}

        <BlurBox />
      </Box>
    </Container>
  );
}

export default PresaleBox;
