import React from "react";

import { Box, Button, Container, Typography, useMediaQuery } from "@mui/material";

import { Telegram, Twitter } from "@mui/icons-material";
import Background from "../Background";
import Discord from "../Socials/Discord";
import MiniLogo from "./MiniLogo";
import { useTheme } from "@mui/material/styles";

const buttonDefaultStyle = {
  borderRadius: "20px",
  fontFamily: "Inter",
  fontWeight: "700",
  fontSize: "16px",
  width: "146px",
  textTransform: "none",
};

const mobileBoxCommunityStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  gap: "10px",
  marginBottom: "100px !important",
};

const defaultBoxCommunityStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "20px",
  columnGap: "20px",
};

const mobileContainerCommunityStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "15px",
  color: "white",
};

const defaultContainerCommunityStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
};

function Community() {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const theme = useTheme();
  return (
    <Background height="80vh" className="app-image-background-community">
      <Container
        id="community"
        maxWidth={false}
        sx={isMobile ? mobileContainerCommunityStyle : defaultContainerCommunityStyle}
      >
        <Typography
          textTransform="none"
          fontSize={isMobile ? "32px" : "48px"}
          fontFamily="Inter"
          fontWeight="700"
          sx={{
            [theme.breakpoints.down(385)]: {
              fontSize: "24px",
            },
          }}
        >
          Join the community
        </Typography>

        <Box sx={isMobile ? mobileBoxCommunityStyle : defaultBoxCommunityStyle}>
          <Button
            sx={{
              ...buttonDefaultStyle,
              color: "#7289DA",
              border: "2px solid #7289DA",
            }}
            target="_blank"
            href="https://discord.com/invite/CQqm2D8J3U"
          >
            Discord
            <Discord color="#7289DA" className="discord" />
          </Button>
          <Button
            sx={{
              ...buttonDefaultStyle,
              color: "#1DA1F2",
              border: "2px solid #1DA1F2",
            }}
            target="_blank"
            href="https://twitter.com/GalacticReborn"
          >
            Twitter
            <Twitter sx={{ color: "#1DA1F2" }} className="twitter" />
          </Button>
          <Button
            sx={{
              ...buttonDefaultStyle,
              color: "#0088CC",
              border: "2px solid #0088CC",
            }}
            target="_blank"
            href="https://t.me/galactic_reborn_offical_chat"
          >
            Telegram
            <Telegram sx={{ color: "#0088CC" }} className="telegram" />
          </Button>
        </Box>
      </Container>
      <Container
        maxWidth={false}
        sx={{
          position: "absolute",
          bottom: 0,
          display: "block",
          textAlign: "center",
          padding: "50px 0 10px 0",
          background: "linear-gradient(0deg, #171717 40%, rgba(23, 23, 23, 0.3) 100%)",
          color: "#FFF",
        }}
      >
        <Typography
          fontFamily="space"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <MiniLogo />
          Galactic Reborn
        </Typography>
      </Container>
    </Background>
  );
}

export default Community;
