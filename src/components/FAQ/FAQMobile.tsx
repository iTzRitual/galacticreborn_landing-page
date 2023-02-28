import React from "react";

import { Box, Button, Container, Typography } from "@mui/material";

import { useTheme } from "@mui/material/styles";
import Background from "../Background";

function FAQMobile() {
  const theme = useTheme();
  return (
    <Background height="fit-content">
      <Container
        id="docs"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
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
              DOCS
              {/* <Typography component="span" fontSize="64px" fontFamily="Inter">
                ’
              </Typography>
              <Typography component="span" fontSize="40px" fontFamily="Space">
                s
              </Typography> */}
            </Typography>
            <Typography fontSize="16px" fontFamily="Inter" color="#C0C0C0">
              Everything you’ve always wanted to know and more.
            </Typography>
          </Box>
          <Button
            disabled
            sx={{
              color: "#C0C0C0 !important",
              display: "flex",
              fontSize: "14px",
              fontWeight: 700,
              textTransform: "capitalize",
              fontFamily: "Inter",
              border: "2px solid #6f5bde",
              borderRadius: "25px",
              columnGap: "10px",
              paddingLeft: "25px",
              paddingRight: "25px",
              minWidth: "111px",
              backgroundColor: "#6f5bde",
            }}
          >
            Stay tuned...
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "250px",
            marginBottom: "50px",
          }}
        >
          <Typography
            fontFamily="Inter"
            fontWeight="700"
            sx={{
              fontSize: "64px",
              marginBottom: "20px",
              textAlign: "center",
              lineHeight: "1",
              [theme.breakpoints.down(430)]: {
                display: "none",
              },
            }}
          >
            Get in touch
          </Typography>
          <Typography
            fontFamily="Inter"
            fontWeight="700"
            sx={{
              fontSize: "32px",
              marginBottom: "20px",
              textAlign: "center",
              lineHeight: "1",
              [theme.breakpoints.down(430)]: {
                display: "none",
              },
            }}
          >
            hi@galacticreborn.io
          </Typography>
        </Box>
      </Container>
    </Background>
  );
}

export default FAQMobile;
