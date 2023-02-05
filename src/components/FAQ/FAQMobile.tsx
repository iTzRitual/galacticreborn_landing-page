import React from "react";

import { Box, Button, Container, Typography } from "@mui/material";

import Background from "../Background";
import ArrowImg from "../../assets/arrow-short";

function FAQMobile() {
  return (
    <Background height="fit-content">
      <Container
        id="faq"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "90px",
          color: "white",
          paddingBottom: "50px !important",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "start",
            padding: "25px",
            gap: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "start",
              gap: 0,
            }}
          >
            <Typography fontSize="64px" fontFamily="Space">
              FAQ
              <Typography component="span" fontSize="64px" fontFamily="Inter">
                ’
              </Typography>
              <Typography component="span" fontSize="40px" fontFamily="Space">
                s
              </Typography>
            </Typography>
            <Typography fontSize="16px" fontFamily="Inter" color="#C0C0C0">
              Everything you’ve always wanted to know and more.
            </Typography>
          </Box>
          <Button
            sx={{
              color: "white",
              display: "flex",
              fontSize: "14px",
              fontWeight: 700,
              textTransform: "capitalize",
              fontFamily: "Inter",
              border: "2px solid #6f5bde",
              borderRadius: "25px",
              columnGap: "10px",
              paddingLeft: "25px",
              paddingRight: "15px",
              minWidth: "111px",
              backgroundColor: "#6f5bde",
            }}
          >
            View all FAQ’s
            <ArrowImg direction={0} color="#FFF" />
          </Button>
        </Box>
      </Container>
    </Background>
  );
}

export default FAQMobile;
