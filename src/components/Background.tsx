import { Container } from "@mui/material";
import React from "react";

interface BackgroundProps {
  children: React.ReactNode;
  className?: string;
  height?: string;
}

function Background({ children, height, className }: BackgroundProps) {
  return (
    <Container
      sx={{
        height,
        display: "flex",
        padding: "0 !important",
        maxWidth: "none !important",
      }}
      className={className}
    >
      {children}
    </Container>
  );
}

Background.defaultProps = {
  height: "100vh",
  className: "app-background",
};

export default Background;
