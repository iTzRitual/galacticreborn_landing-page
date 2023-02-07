import React from "react";
import { Container, useMediaQuery } from "@mui/material";
import Background from "../Background";
import BackgroundImage from "../BackgroundImage";
import Content from "./Content";
import ScrollDownButton from "../ScrollDownButton";
import { useTheme } from "@mui/material/styles";

export default function About() {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const theme = useTheme();
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
        {useMediaQuery(theme.breakpoints.up(1169)) && <BackgroundImage />}
        <Container className="app-image-background-about__child" />
        {useMediaQuery(theme.breakpoints.up(1169)) && <ScrollDownButton scrollTo="roadmap" />}
      </Background>
    </div>
  );
}
