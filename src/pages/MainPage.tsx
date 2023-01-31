import React from "react";
import { Container } from "@mui/material";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Roadmap from "../components/Roadmap/Roadmap";
import Team from "../components/Team/Team";
import FAQ from "../components/FAQ/FAQ";
import Community from "../components/Community/Community";
import StickyButton from "../components/StickyButton";

export default function MainPage() {
  return (
    <Container
      maxWidth={false}
      sx={{
        padding: "0 !important",
        margin: "0 !important",
        display: "flex",
        flexDirection: "column",
        minWidth: "100vw",
      }}
    >
      <Home />
      <About />
      <Roadmap />
      <Team />
      <FAQ />
      <Community />
      <StickyButton />
    </Container>
  );
}
