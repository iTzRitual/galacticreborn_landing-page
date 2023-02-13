import React from "react";
import { Container } from "@mui/material";
import Background from "../Background";
import Navbar from "../Home/Navbar";
import PresaleBox from "./PresaleBox";

function PresalePage() {
  return (
    <Background className="app-image-background-presale">
      <Container
        maxWidth={false}
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "0 !important",
          width: "100%",
        }}
      >
        <Navbar />
        <PresaleBox />
      </Container>
    </Background>
  );
}

export default PresalePage;
