import React from "react";

import { ButtonGroup, IconButton } from "@mui/material";

export default function Socials() {
  return (
    <ButtonGroup
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "1fr 1fr",
        marginLeft: "30px",
      }}
    >
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
