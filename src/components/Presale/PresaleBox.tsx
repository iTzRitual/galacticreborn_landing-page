import React from "react";
import { Box, Container } from "@mui/material";

import Sale from "./Sale";
import WebProvider from "./WebProvider";

function PresaleBox() {
  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <Box
        className="app-presale-box-background"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          width: "65%",
          height: "80%",
          color: "white",
        }}
      >
        <WebProvider />
        <Sale />
      </Box>
    </Container>
  );
}

export default PresaleBox;
