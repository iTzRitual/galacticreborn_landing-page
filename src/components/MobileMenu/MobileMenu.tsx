import React from "react";
import { Box } from "@mui/material";

export default function MobileMenu() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        background: "black",
        position: "absolute",
        right: "-100vw",
      }}
    ></Box>
  );
}
