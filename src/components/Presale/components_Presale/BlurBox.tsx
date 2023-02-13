import { Box } from "@mui/material";
import React from "react";

function BlurBox() {
  return (
    <Box
      className="app-presale-box-background"
      sx={{
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    />
  );
}

export default BlurBox;
