import React from "react";
import { Container, useMediaQuery } from "@mui/material";
import Background from "../Background";
import BackgroundImage from "../BackgroundImage";
import Content from "./Content";
import ScrollDownButton from "../ScrollDownButton";

export default function About() {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <div>
      {isMobile ? (
        <Background height="fit-content" className="app-mobile-background-about">
          <Container
            id="about"
            sx={{
              display: "flex",
              marginRight: "-1px",
              flexDirection: "column",
            }}
          >
            <Content />
          </Container>
        </Background>
      ) : (
        <Background height="fit-content" className="app-image-background-about">
          <Container
            id="about"
            sx={{
              display: "flex",
              justifyContent: "center",
              marginRight: "-1px",
              flexDirection: "column",
              marginLeft: "40px",
            }}
          >
            <Content />
          </Container>
          <BackgroundImage />
          <Container className="app-image-background-about__child" />
          <ScrollDownButton scrollTo="roadmap" />
        </Background>
      )}
    </div>
  );
}
