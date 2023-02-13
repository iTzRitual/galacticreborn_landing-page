import React from "react";
import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Background from "../Background";
import Stage from "./Stage";
import progressBar from "../../assets/in_progress.svg";

interface IStage {
  description: string;
  points: string[];
}

const stages = {
  "Stage 1": {
    description: "Development and Community Building",
    points: [
      "Development of basic game mechanics and the core game loop",
      "Implementation of basic in-game currency and economy",
      "Adding token use-cases in the game to bring more value and deflationary models as one of the tokens utility",
      "Community building",
      "First Galactic Pass mint",
      "Conducting $GCR token Presale for whitelisted members on our website",
    ],
  },
  "Stage 2": {
    description: "Public Sale & Alpha Game Release",
    points: [
      "Conducting Public Sale of the $GCR token",
      "Staking and liquidity providing incentives",
      "Release of alpha version of the game and presentation for the public",
      "Release of beta version Galactic Pass Holders for testing and feedback",
      "Implementation of additional gameplay features",
    ],
  },
  "Stage 3": {
    description: "Full Release and Deflationary Mechanisms",
    points: [
      "Release of full version of the game on the browser",
      "Introduction of deflationary token mechanisms",
      "Introduction of new in-game events and challenges",
      "Expansion of the game to difference chains",
    ],
  },
  "Stage 4": {
    description: "Mobile Compatibility & Further Token Utilities",
    points: [
      "Implementation of mobile compatibility",
      "Introduction of new in-game items and equipment",
      "Deployment of features into the game which will allow players to gain $GCR through a risk-to-earn mechanics",
    ],
  },
  "Stage 5": {
    description: "Tournaments and Referral System",
    points: [
      "Introduction of a referral system",
      "Development of in-game tournaments and leaderboards",
      "Release of Galactic Reborn Expansion series",
    ],
  },
} as Record<string, IStage>;

export default function Roadmap() {
  const theme = useTheme();
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
        <Box
          className="roadmap__progressbar"
          sx={{
            position: "absolute",
            top: "13%",
            transform: "translateX(-50%)",
            width: "100%",
            [theme.breakpoints.down(1369)]: {
              left: "65%",
            },
            left: "55%",
            [theme.breakpoints.down(900)]: {
              display: "none",
            },
          }}
        >
          <img src={progressBar} alt="progress bar" />
        </Box>
      </Container>
    </Background>
  );
}
