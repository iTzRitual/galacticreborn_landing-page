import React from "react";
import { Container, useMediaQuery } from "@mui/material";
import Background from "../Background";
import BackgroundImage from "../BackgroundImage";
import Navbar from "./Navbar";
import Content from "./Content";

export default function Home() {
  const isMobile = useMediaQuery("(max-width: 600px)");
  return (
    <div>
      {isMobile ? (
        <Background height="fit-content" className="app-mobile-background-home">
          <Container
            id="home"
            sx={{
              display: "flex",
              marginRight: "-1px",
              flexDirection: "column",
            }}
          >
            <Navbar />
            <Content />
          </Container>
        </Background>
      ) : (
        <Background>
          <BackgroundImage className="app-image-background-home" />
          <Container
            sx={{
              height: "100vh !important",
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
      )}
    </div>
  );
}
