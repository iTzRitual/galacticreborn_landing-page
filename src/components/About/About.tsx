import React from "react";
import { Container } from "@mui/material";
import Background from "../Background";
import BackgroundImage from "../BackgroundImage";
import Content from "./Content";

export default function About() {
  return (
    <Background>
      <Container
        id="about"
        sx={{
          height: "100vh",
          display: "flex",
          background: "#171717",
          marginRight: "-3px",
          flexDirection: "column",
          marginLeft: "40px",
        }}
      >
        <Content />
      </Container>
      <BackgroundImage className="app-image-background-about" />
    </Background>
  );
}
