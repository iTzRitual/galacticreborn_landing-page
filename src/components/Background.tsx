import { Container } from "@mui/material";
import React from "react";

// This is a component that takes in children and renders them in a container

export default function Background({ children }: { children: React.ReactNode }) {
  return (
    <Container
      sx={{
        height: "100vh",
        display: "flex",
        padding: "0 !important",
        maxWidth: "none !important",
      }}
      className="app-background"
    >
      {children}
    </Container>
  );
}
