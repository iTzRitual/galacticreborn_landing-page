import React from "react";
import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import Background from "../Background";

import Stage from "./Stage";
import progressBar from "../../assets/in_progress.svg";

interface IStage {
  description: string;
  points: string[];
}

const stages = {
  "Stage 1": {
    description: "Development and Alpha Release",
    points: [
      "Development of basic game mechanics and user interface",
      "Implementation of basic in-game currency and economy",
      "Testing and bug fixing",
      "Introduction of player vs player combat",
      "Implementation of blockchain technology for item ownership and trading",
      "Release of alpha version for testing and feedback",
    ],
  },
  "Stage 2": {
    description: "Beta Release and Additional Features",
    points: [
      "Implementation of additional in-game items and ships",
      "Staking and liquidity providing incentives",
      "Development of alliance systems",
      "Release of beta version for further testing and feedback",
      "Implementation of additional gameplay features, such as transportation, exploration",
    ],
  },
  "Stage 3": {
    description: "Full Release and Optimization",
    points: [
      "Release of full version of the game on the browser",
      "Continuous bug fixing and optimization",
      "Introduction of new in-game events and challenges",
      "Expansion of the game to difference chains",
    ],
  },
  "Stage 4": {
    description: "Mobile Compatibility and Markets",
    points: [
      "Implementation of mobile compatibility",
      "Introduction of new in-game items and equipment",
      "Development of a marketplace for players to buy and sell items",
      "Development of an in-game stock market",
    ],
  },
  "Stage 5": {
    description: "Tournaments and Referral System",
    points: [
      "Introduction of a referral system",
      "Development of in-game tournaments and leaderboards",
      "Release of new game updates and features",
    ],
  },
} as Record<string, IStage>;

export default function Roadmap() {
  const isMobile = useMediaQuery("(max-width: 600px)");
  return (
    <Background height="fit-content" className="app-background-roadmap">
      <Container
        id="roadmap"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          color: "white",
          paddingBottom: "300px !important",
        }}
      >
        <Box
          sx={{
            marginTop: "70px",
          }}
        >
          <Typography variant={isMobile ? "h4" : "h3"} sx={{ fontFamily: "Space" }}>
            Roadmap
          </Typography>
        </Box>
        {Object.keys(stages).map((stage) => (
          <Stage
            key={stage}
            stage={stage}
            description={stages[stage].description}
            stagePoints={stages[stage].points}
          />
        ))}
        {isMobile || (
          <Box
            className="roadmap__progressbar"
            sx={{
              position: "absolute",
              top: "13%",
              left: "55%",
              transform: "translateX(-50%)",
              width: "100%",
            }}
          >
            <img src={progressBar} alt="progress bar" />
          </Box>
        )}
      </Container>
    </Background>
  );
}
