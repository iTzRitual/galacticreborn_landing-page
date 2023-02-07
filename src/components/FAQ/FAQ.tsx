import React from "react";

import { Box, Button, Container, Typography } from "@mui/material";
import Background from "../Background";
import faqImage from "../../assets/faq.svg";
import contactEmail from "../../assets/contact.png";
import ArrowImg from "../../assets/arrow-short";

function FAQ() {
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
            maxWidth: "920px",
            backgroundColor: "#252525",
            borderRadius: "50px",
          }}
        >
          <Box>
            <img src={faqImage} alt="faq" style={{ borderRadius: "50px" }} />
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
                Lörem ipsum nynisa tenera, mikronde, i tynde, i kisk, kara geonerat med semiseng, är
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

export default FAQ;
