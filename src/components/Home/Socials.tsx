import React from "react";

import { ButtonGroup, IconButton, useMediaQuery } from "@mui/material";
import { Telegram, Twitter } from "@mui/icons-material";
import Discord from "../Socials/Discord";
import Medium from "../Socials/Medium";

const socialsMobile = {
  display: "flex",
};

const socialsDesktop = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridTemplateRows: "1fr 1fr",
  marginLeft: "20px",
};

export default function Socials() {
  const isMobile = useMediaQuery("(max-width: 900px)");
  return (
    <ButtonGroup sx={isMobile ? socialsMobile : socialsDesktop}>
      <IconButton
        href="https://medium.com/@galacticreborn"
        target="_blank"
        sx={{
          width: "46px",
          height: "46px",
        }}
      >
        <Medium />
      </IconButton>
      <IconButton href="https://discord.com/invite/CQqm2D8J3U">
        <Discord />
      </IconButton>
      <IconButton href="https://twitter.com/GalacticReborn">
        <Twitter sx={{ color: "white" }} />
      </IconButton>
      <IconButton href="https://t.me/galactic_reborn_offical_chat">
        <Telegram sx={{ color: "white" }} />
      </IconButton>
    </ButtonGroup>
  );
}
