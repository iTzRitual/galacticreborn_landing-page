import React from "react";

import { Box, Button, Container, Typography } from "@mui/material";

const buttonMobileStyle = {
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

export default function ContentMobile() {
  return (
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
          maxWidth: "375px",
          lineHeight: "1",
        }}
      >
        {/* <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "1rem",
            fontFamily: "Inter",
          }}
        >
          PRESALE IS LIVE
        </Typography> */}
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "2rem",
            marginTop: "10px",
            marginBottom: "10px",
            whiteSpace: "wrap",
            fontFamily: "Inter",
          }}
        >
          The Universe Awaits You.
        </Typography>
        <Typography
          sx={{
            fontFamily: "Inter",
          }}
        >
          Welcome to Galactic Reborn - the ultimate space conquest game. Create your own empire,
          battle other players, and stake your claim in the universe. Join now and shape the fate of
          the galaxy!
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
              ...buttonMobileStyle,
              minWidth: "172px",
              color: "#6f5bde",
            }}
          >
            Whitepaper &gt;
          </Button>
          <Button
            sx={{
              ...buttonMobileStyle,
              minWidth: "111px",
              backgroundColor: "#6f5bde",
            }}
          >
            FAQ &gt;
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
