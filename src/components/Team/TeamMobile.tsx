import React from "react";

import { Box, Container, Typography } from "@mui/material";
import Background from "../Background";

function TeamMobile() {
  return (
    <Background height="fit-content" className="app-image-background-team-mobile">
      <Container
        id="team"
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "90px",
          color: "white",
          paddingBottom: "50px !important",
        }}
      >
        <Typography fontSize="3rem" fontFamily="Space">
          Team
        </Typography>
        <Box
          sx={{
            width: "100%",
            marginTop: "30px",
            display: "flex",
            flexDirection: "column",
            rowGap: "15px",
          }}
        >
          <Typography
            fontSize="16px"
            fontFamily="Inter"
            overflow="hidden"
            color="#C0C0C0"
            paddingLeft="37px"
            paddingRight="32px"
          >
            Embark on a journey through the vast expanse of the crypto-universe with our team of
            pioneering space explorers. With expertise in game development, marketing, and product
            management, our team is equipped to guide you through the uncharted territories of our
            browser galaxy expansion and conquest game. Each member brings unique skills and
            experiences, fueling our mission to discover new frontiers in the crypto world. Join us
            as we boldly go where no one has gone before in our quest for the ultimate space
            discovery
          </Typography>
        </Box>
      </Container>
    </Background>
  );
}

export default TeamMobile;
