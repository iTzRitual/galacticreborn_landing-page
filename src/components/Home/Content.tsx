import React from "react";

import { Box, Container, Typography } from "@mui/material";

export default function Content() {
  return (
    <Container
      sx={{
        height: "100%",
        width: "100%",
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
          }}
        >
          Lörem ipsum antiheten nyning
        </Typography>
        <Typography>
          Lörem ipsum aveck gigan eller esat. Farat bifar nusår hexalililiga. Ovivaligt ultrar
          fixie. Kyrktrappsbröllop mansplaining nöbigen. Mavis dogmafilm orat hemin. Deform
          krisväska. Parov.
        </Typography>
      </Box>
    </Container>
  );
}
