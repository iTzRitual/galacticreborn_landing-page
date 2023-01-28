import React from "react";
import { Container } from "@mui/material";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Roadmap from "../components/Roadmap/Roadmap";

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
    </Container>
  );
}
