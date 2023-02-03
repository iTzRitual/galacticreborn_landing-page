import React from "react";
import { Container, useMediaQuery } from "@mui/material";
import Background from "../Background";
import BackgroundImage from "../BackgroundImage";
import Navbar from "./Navbar";
import Content from "./Content";
import ScrollDownButton from "./ScrollDownButton";


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
        <Background className="app-image-background-home__grid">
          <Navbar />
          <BackgroundImage className="app-image-background-home" />
          <Container
            sx={{
              height: "100vh !important",
              display: "flex",
              marginLeft: "-1px",
              flexDirection: "column",
            }}
          >
            <Content />
          </Container>
          <Container className="app-image-background-home__child" />
          <ScrollDownButton scrollTo={"about"}/>
        </Background>
      )}
    </div>
  );
}
