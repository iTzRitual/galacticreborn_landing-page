import React from "react";
import { Container, useMediaQuery } from "@mui/material";
import Background from "../Background";
import BackgroundImage from "../BackgroundImage";
import Content from "./Content";

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
        <Background height="fit-content">
          <Container
            id="about"
            sx={{
              display: "flex",
              background: "#171717",
              marginRight: "-1px",
              flexDirection: "column",
              marginLeft: "40px",
            }}
          >
            <Content />
          </Container>
          <BackgroundImage className="app-image-background-about" />
        </Background>
      )}
    </div>
  );
}
