import React from "react";
import { Container, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MobileMenu from "../components/MobileMenu/MobileMenu";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Roadmap from "../components/Roadmap/Roadmap";
import Team from "../components/Team/Team";
import FAQ from "../components/FAQ/FAQ";
import Community from "../components/Community/Community";
import StickyButton from "../components/StickyButton";

export default function MainPage() {
  const theme = useTheme();
  return (
    <div>
      {useMediaQuery(theme.breakpoints.down(900)) && <MobileMenu />}
      <Container
        id="app-container"
        maxWidth={false}
        sx={{
          padding: "0 !important",
          margin: "0 !important",
          display: "flex",
          flexDirection: "column",
          minWidth: "100vw",
          [theme.breakpoints.down(900)]: {
            transition: ".3s",
            transform: "translateX(0)",
          },
        }}
      >
        <Home />
        <About />
        <Roadmap />
        <Team />
        <FAQ />
        <Community />
      </Container>
      <StickyButton />
    </div>
  );
}
