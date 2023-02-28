import React from "react";

import { Box, Button, Container, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Background from "../Background";
import faqImage from "../../../public/gcrlogo.svg";

function FAQDesktop() {
  const theme = useTheme();
  const isTablet = useMediaQuery("(max-width: 850px)");

  const imageIsTabletStyle = {
    display: "none",
  };

  const imageIsDefaultStyle = {
    borderRadius: "50px",
    width: "550px",
    marginLeft: "-55px",
    marginTop: "-75px",
  };

  return (
    <Background height="fit-content">
      <Container
        id="docs"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "50px",
          color: "white",
          paddingBottom: "50px !important",
        }}
      >
        <Box
          sx={{
            display: "flex",
            maxWidth: "920px",
            backgroundColor: "#252525",
            borderRadius: "50px",
            overflow: "hidden",
            height: "400px",
            [theme.breakpoints.down(850)]: {
              backgroundColor: "transparent",
            },
          }}
        >
          <Box>
            <img
              src={faqImage}
              alt="faq"
              style={isTablet ? imageIsTabletStyle : imageIsDefaultStyle}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "start",
              padding: "50px",
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
              <Typography fontSize={isTablet ? "50px" : "3rem"} fontFamily="Space">
                DOCS
                {/* <Typography
                  component="span"
                  fontSize={isTablet ? "50px" : "64px"}
                  fontFamily="Inter"
                >
                  ’
                </Typography>
                <Typography
                  component="span"
                  fontSize={isTablet ? "30px" : "40px"}
                  fontFamily="Space"
                >
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
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "250px",
            marginBottom: "50px",
            [theme.breakpoints.down(1300)]: {
              paddingLeft: "50px",
              paddingRight: "50px",
            },
          }}
        >
          <Typography
            fontFamily="Inter"
            fontWeight="700"
            sx={{
              fontSize: "96px",
              [theme.breakpoints.down(850)]: {
                fontSize: "64px",
                marginBottom: "20px",
              },
            }}
          >
            Get in touch
          </Typography>
          <Typography
            fontFamily="Inter"
            fontWeight="700"
            sx={{
              fontSize: "72px",
              [theme.breakpoints.down(850)]: {
                fontSize: "54px",
                marginBottom: "20px",
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

export default FAQDesktop;
