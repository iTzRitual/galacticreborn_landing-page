import React from "react";

import { Box, Button, Container, Typography, useMediaQuery } from "@mui/material";

import { Telegram, Twitter } from "@mui/icons-material";
import Background from "../Background";
import contactEmail from "../../assets/contact.png";
import Discord from "../Socials/Discord";

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
  color: "white",
};

const defaultContainerCommunityStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
};

const mobileTextBoxCommunityStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "120px",
  marginBottom: "30px",
};

const defaultTextBoxCommunityStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "120px",
  marginBottom: "100px",
};

function Community() {
  const isMobile = useMediaQuery("(max-width: 600px)");
  return (
    <Background
      height={isMobile ? "fit-content" : "80vh"}
      className="app-image-background-community"
    >
      <Container
        id="community"
        maxWidth={false}
        sx={isMobile ? mobileContainerCommunityStyle : defaultContainerCommunityStyle}
      >
        {isMobile ? (
          <Box sx={isMobile ? mobileTextBoxCommunityStyle : defaultTextBoxCommunityStyle}>
            <Typography fontSize="30px" fontFamily="Inter" fontWeight="700">
              Get in touch
            </Typography>
            <img src={contactEmail} alt="contact" style={{ width: "389px" }} />
          </Box>
        ) : (
          <Typography textTransform="none" fontSize="48px" fontFamily="Inter" fontWeight="700">
            Join the community
          </Typography>
        )}

        <Box sx={isMobile ? mobileBoxCommunityStyle : defaultBoxCommunityStyle}>
          <Button
            sx={{
              ...buttonDefaultStyle,
              color: "#7289DA",
              border: "2px solid #7289DA",
            }}
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
        <Typography fontFamily="space">Galactic Reborn 2023</Typography>
      </Container>
    </Background>
  );
}

export default Community;
