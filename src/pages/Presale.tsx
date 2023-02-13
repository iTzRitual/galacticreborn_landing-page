import React from "react";
import { Container } from "@mui/material";

import PresalePage from "../components/Presale/PresalePage";

export default function Presale() {
  return (
    <Container
      sx={{
        padding: "0 !important",
        margin: "0 !important",
        display: "flex",
        flexDirection: "column",
        minWidth: "100vw",
      }}
    >
      <PresalePage />
    </Container>
  );
}
