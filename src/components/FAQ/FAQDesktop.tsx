import React from "react";

import { Box, Button, Container, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Background from "../Background";
import faqImage from "../../assets/faq.webp";
import contactEmail from "../../assets/contact.png";
import ArrowImg from "../../assets/arrow-short";

function FAQDesktop() {
  const theme = useTheme();
  const isTablet = useMediaQuery("(max-width: 800px)");

  const imageIsTabletStyle = {
    borderRadius: "50px",
    width: "300px",
  };

  const imageIsDefaultStyle = {
    borderRadius: "50px",
    width: "400px",
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
          marginTop: "90px",
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
            [theme.breakpoints.down(900)]: {
              maxWidth: "100%",
              flexDirection: "row",
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
              <Typography fontSize={isTablet ? "50px" : "64px"} fontFamily="Space">
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
              View Docs
              <ArrowImg direction={0} color="#FFF" />
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "150px",
            marginBottom: "250px",
          }}
        >
          <Typography fontSize="96px" fontFamily="Inter" fontWeight="700">
            Get in touch
          </Typography>
          <img src={contactEmail} alt="contact" style={{ marginTop: "-50px", maxWidth: "100%" }} />
        </Box>
      </Container>
    </Background>
  );
}

export default FAQDesktop;
