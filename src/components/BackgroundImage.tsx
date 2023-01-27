import { Container } from "@mui/material";
import React from "react";

interface BackgroundImageProps {
  className?: string;
}

function BackgroundImage({ className }: BackgroundImageProps) {
  return (
    <Container
      sx={{
        height: "100vh",
        display: "flex",
        gridArea: "left",
      }}
      className={className}
    />
  );
}

BackgroundImage.defaultProps = {
  className: "",
};

export default BackgroundImage;
