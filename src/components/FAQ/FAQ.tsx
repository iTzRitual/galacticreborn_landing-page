import React from "react";

import { Box, Button, Container, Typography } from "@mui/material";
import Background from "../Background";
import faqImage from "../../assets/faq.svg";
import contactEmail from "../../assets/contact.png";

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
            }}
          >
            <Typography fontSize="2.5rem" fontFamily="Space">
              FAQ’s
            </Typography>
            <Typography fontSize="16px" fontFamily="Inter">
              Lörem ipsum nynisa tenera, mikronde, i tynde, i kisk, kara geonerat med semiseng, är
            </Typography>
            <Button
              sx={{
                marginTop: "20px",
                backgroundColor: "#6F5BDE",
                borderRadius: "20px",
                color: "white",
                fontFamily: "Inter",
                fontWeight: "700",
                fontSize: "16px",
                width: "180px",
                textTransform: "none",
              }}
            >
              View all FAQ’s
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
          <img src={contactEmail} alt="contact" style={{ marginTop: "10px" }} />
        </Box>
      </Container>
    </Background>
  );
}

export default FAQ;
