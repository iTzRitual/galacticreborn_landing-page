import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";

const textMobileStyle = {
  color: "#C0C0C0",
  marginTop: "15px",
  maxWidth: "375px",
  fontSize: "16px",
  padding: "0 15px",
};

const textDesktopStyle = {
  color: "#C0C0C0",
  marginTop: "15px",
  maxWidth: "723px",
  fontSize: "20px",
};

function Content() {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <Box
      sx={{
        fontFamily: "Space !important",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant={isMobile ? "h4" : "h3"}
        sx={{ color: "white", fontWeight: "bold", marginTop: "81px", fontFamily: "inherit" }}
      >
        UNIVERSE
      </Typography>
      <Typography
        variant={isMobile ? "h4" : "h3"}
        sx={{ color: "white", fontWeight: "bold", fontFamily: "inherit" }}
      >
        IN YOUR HANDS
      </Typography>
      <Typography sx={isMobile ? textMobileStyle : textDesktopStyle} paragraph>
        Welcome to Galactic Reborn - a browser-based space exploration and conquest game where you
        can create your own intergalactic empire, battle against other players, and stake your claim
        in the universe. With a unique art style and immersive lore, Galactic Reborn offers endless
        opportunities for adventure and strategic gameplay. Join the ranks of ambitious space
        explorers and shape the fate of the galaxy. Are you ready to embark on your journey?
      </Typography>
    </Box>
  );
}

export default Content;
