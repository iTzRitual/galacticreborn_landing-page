import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";

const textMobileStyle = {
  fontFamily: "Inter",
  color: "#C0C0C0",
  marginTop: "15px",
  maxWidth: "375px",
  fontSize: "16px",
  padding: "0 15px",
};

const textDesktopStyle = {
  fontFamily: "Inter",
  color: "#C0C0C0",
  marginTop: "15px",
  marginBottom: "0",
  maxWidth: "723px",
  fontSize: "20px",
  fontWeight: "200",
};

function Content() {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const theme = useTheme();
  return (
    <Box
      sx={{
        fontFamily: "Space !important",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        [theme.breakpoints.down(1169)]: {
          alignItems: "center",
        },
      }}
    >
      <Typography
        variant={isMobile ? "h4" : "h3"}
        sx={{
          color: "white",
          fontWeight: "bold",
          marginTop: "81px",
          fontFamily: "inherit",
          fontSize: "48px",
          letterSpacing: "2px",
          [theme.breakpoints.down(1169)]: {
            fontSize: "32px",
          },
        }}
      >
        UNIVERSE
      </Typography>
      <Typography
        variant={isMobile ? "h4" : "h3"}
        sx={{
          color: "white",
          fontWeight: "bold",
          fontFamily: "inherit",
          fontSize: "48px",
          letterSpacing: "2px",
          [theme.breakpoints.down(1169)]: {
            fontSize: "32px",
          },
        }}
      >
        IN YOUR HANDS
      </Typography>
      <Typography sx={isMobile ? textMobileStyle : textDesktopStyle} paragraph>
        Take your chance on the adventure into the world - you&apos;ll have the chance to create
        your own empire, gather resources, discover cutting-edge tech, build your fleet, and conquer
        new territories.
      </Typography>
      <Typography sx={isMobile ? textMobileStyle : textDesktopStyle} paragraph>
        But the universe is a dangerous place, filled with other players who are vying for
        dominance. You&apos;ll need to battle strategically to protect your resources and expand
        your empire. But don&apos;t worry, you won&apos;t be alone in this endeavor. You&apos;ll be
        able to form alliances with other players, and together, you&apos;ll be able to conquer even
        the most formidable opponents.
      </Typography>
      <Typography sx={isMobile ? textMobileStyle : textDesktopStyle} paragraph>
        At Galactic Reborn, we believe that the universe truly awaits you. With our game,
        you&apos;ll be able to explore new worlds, interact with other players from all around the
        globe, and stake your claim in the galaxy. So what are you waiting for? Join now and shape
        the fate of the universe!
      </Typography>
    </Box>
  );
}

export default Content;
