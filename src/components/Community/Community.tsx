import React from "react";

import { Box, Button, Container, Typography, useMediaQuery } from "@mui/material";

import Background from "../Background";
import contactEmail from "../../assets/contact.png";

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
};

const defaultBoxCommunityStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "20px",
  width: "45%",
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

function Community() {
  const isMobile = useMediaQuery("(max-width: 600px)");
  return (
    <Background height="80vh" className="app-image-background-community">
      <Container
        id="community"
        sx={isMobile ? mobileContainerCommunityStyle : defaultContainerCommunityStyle}
      >
        {isMobile ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "120px",
              marginBottom: "100px",
            }}
          >
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
            <img src="discord.svg" alt="discord" style={{ marginLeft: "15px" }} />
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
            <img src="twitter.svg" alt="twitter" style={{ marginLeft: "15px" }} />
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
            <img src="telegram.svg" alt="telegram" style={{ marginLeft: "15px" }} />
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
