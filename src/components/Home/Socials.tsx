import React from "react";

import { ButtonGroup, IconButton, useMediaQuery } from "@mui/material";

const socialsMobile = {
  display: "flex",
};

const socialsDesktop = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridTemplateRows: "1fr 1fr",
  marginLeft: "30px",
};

export default function Socials() {
  const isMobile = useMediaQuery("(max-width: 600px)");
  return (
    <ButtonGroup sx={isMobile ? socialsMobile : socialsDesktop}>
      <IconButton
        href="https://medium.com/"
        sx={{
          margin: 0,
          padding: "10px",
        }}
      >
        <img src="medium.svg" alt="medium" />
      </IconButton>
      <IconButton href="https://discord.gg/">
        <img src="discord.svg" alt="discord" />
      </IconButton>
      <IconButton href="https://twitter.com/">
        <img src="twitter.svg" alt="twitter" />
      </IconButton>
      <IconButton href="https://t.me/">
        <img src="telegram.svg" alt="telegram" />
      </IconButton>
    </ButtonGroup>
  );
}
