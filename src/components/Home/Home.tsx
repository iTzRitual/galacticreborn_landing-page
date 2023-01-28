import React from "react";
import { Container } from "@mui/material";
import Background from "../Background";
import BackgroundImage from "../BackgroundImage";
import Navbar from "./Navbar";
import Content from "./Content";

export default function Home() {
  return (
    <Background>
      <BackgroundImage className="app-image-background-home" />
      <Container
        sx={{
          height: "100vh",
          display: "flex",
          background: "#171717",
          marginLeft: "-1px",
          flexDirection: "column",
        }}
      >
        <Navbar />
        <Content />
      </Container>
    </Background>
  );
}
