import React from "react";

import { Box, Button, Container, Typography, useMediaQuery } from "@mui/material";
import ContentMobile from "./ContentMobile";

const buttonDefaultStyle = {
  color: "white",
  display: "block",
  fontSize: "14px",
  fontWeight: 700,
  textTransform: "capitalize",
  fontFamily: "Inter",
  minWidth: "90px",
  border: "2px solid #6f5bde",
  borderRadius: "25px",
};

export default function Content() {
  const isMobile = useMediaQuery("(max-width: 600px)");
  return (
    <div>
      {isMobile ? (
        <ContentMobile />
      ) : (
        <Container
          sx={{
            height: "100%",
            width: "100%",
            minHeight: "80vh",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "100%",
              color: "white",
              marginLeft: "100px",
              maxWidth: "550px",
              lineHeight: "1",
            }}
          >
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "1rem",
                fontFamily: "Inter",
              }}
            >
              PRESALE IS LIVE
            </Typography>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "3rem",
                marginTop: "10px",
                marginBottom: "10px",
                whiteSpace: "wrap",
                fontFamily: "Inter",
              }}
            >
              Lörem ipsum antiheten nyning
            </Typography>
            <Typography
              sx={{
                fontFamily: "Inter",
              }}
            >
              Lörem ipsum aveck gigan eller esat. Farat bifar nusår hexalililiga. Ovivaligt ultrar
              fixie. Kyrktrappsbröllop mansplaining nöbigen. Mavis dogmafilm orat hemin. Deform
              krisväska. Parov.
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: "20px",
                marginTop: "40px",
              }}
            >
              <Button
                sx={{
                  ...buttonDefaultStyle,
                  minWidth: "172px",
                  color: "#6f5bde",
                }}
              >
                Whitepaper &gt;
              </Button>
              <Button
                sx={{
                  ...buttonDefaultStyle,
                  minWidth: "111px",
                  backgroundColor: "#6f5bde",
                }}
              >
                FAQ &gt;
              </Button>
            </Box>
          </Box>
        </Container>
      )}
    </div>
  );
}
