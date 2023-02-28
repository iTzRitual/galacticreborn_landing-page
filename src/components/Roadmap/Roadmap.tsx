import React from "react";
import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Background from "../Background";
import Stage from "./Stage";
import progressBar from "../../assets/in_progress.svg";

interface IStage {
  description: string;
  points: string[];
  ready: boolean[];
}

const stages = {
  "Stage 0": {
    description: "Genesis",
    points: [
      "Concept and Key Features",
      "Market Research",
      "Platform and Blockchain Technology",
      "Scope, Timeline, and Budget",
      "Development Team",
    ],
    ready: [true, true, true, true, true],
  },
  "Stage 1": {
    description: "Cosmic Creation",
    points: [
      "Whitepaper and Comprehensive Documentation",
      "Game Mechanics and Token Integration",
      "Community Building",
    ],
    ready: [true, true, false],
  },
  "Stage 2": {
    description: "Intergalactic Journey",
    points: ["Astral Pass", "Presale", "Public Sale"],
    ready: [false, false, false],
  },
  "Stage 3": {
    description: "Starforge",
    points: ["Alpha Release", "Staking Incentives", "Galaxy Explorer NFT Mint"],
    ready: [false, false, false],
  },
  "Stage 4": {
    description: "Celestial Expansion",
    points: ["Beta Release", "Galaxy Explorer In-Game Utilities", "Additional Gameplay Features"],
    ready: [false, false, false],
  },
  "Stage 5": {
    description: "Galactic Synergy",
    points: ["Full Release", "Full Mobile Compatibility (RWD)", "Marketing Push"],
    ready: [false, false, false],
  },
  "Stage 6": {
    description: "Universal Alliances",
    points: ["Referral System", "Cosmetic and Utility NFTs", "Internationalization "],
    ready: [false, false, false],
  },
  "Stage 7": {
    description: "Infinite Horizons",
    points: ["Ongoing Development", "Regular Updates and Optimization", "Long-term Sustainability"],
    ready: [false, false, false],
  },
} as Record<string, IStage>;

export default function Roadmap() {
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width: 600px)");
  return (
    <Background
      height="fit-content"
      className={isMobile ? "app-background-roadmap-mobile" : "app-background-roadmap"}
    >
      <Container
        id="roadmap"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          color: "white",
          paddingBottom: "200px !important",
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
            readyPoints={stages[stage].ready}
          />
        ))}
        <Box
          className="roadmap__progressbar"
          sx={{
            position: "absolute",
            top: "11%",
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
