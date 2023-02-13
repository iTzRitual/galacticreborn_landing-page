import React from "react";
import { Container, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Background from "../Background";
import BackgroundImage from "../BackgroundImage";
import Content from "./Content";
import ScrollDownButton from "../ScrollDownButton";

export default function About() {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up(1169));
  return (
    <div>
      <Background height="fit-content" className="app-image-background-about">
        <Container
          id="about"
          sx={{
            display: "flex",
            justifyContent: "center",
            marginRight: "-1px",
            flexDirection: "column",
            marginLeft: "40px",
            [theme.breakpoints.down(1168)]: {
              width: "800px",
              maxWidth: "100%",
              textAlign: "center",
              marginLeft: "auto",
              marginRight: "auto",
              paddingLeft: "5%",
              paddingRight: "5%",
            },
          }}
        >
          <Content />
        </Container>
        {isTablet && <BackgroundImage />}
        <Container className="app-image-background-about__child" />
        {isTablet && <ScrollDownButton scrollTo="roadmap" />}
      </Background>
    </div>
  );
}
