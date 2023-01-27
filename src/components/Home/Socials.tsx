import React from "react";

import { ButtonGroup, IconButton } from "@mui/material";

export default function Socials() {
  return (
    <ButtonGroup
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "1fr 1fr",
      }}
    >
      <IconButton
        sx={{
          margin: 0,
          padding: "10px",
        }}
        href="https://medium.com/"
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

// <Box
// sx={{
//   display: { xs: "none", md: "flex" },
//   gap: "15px",
//   flexDirection: "column",
//   margin: "13px 0 13px 0",
// }}
// >
// <Box sx={{ display: { xs: "none", md: "flex" }, columnGap: "20px" }}>
//   <a href="https://medium.com/">
//     <img src="medium.svg" alt="medium" />
//   </a>
//   <a href="https://discord.gg/">
//     <img src="discord.svg" alt="discord" />
//   </a>
// </Box>
// <Box sx={{ display: { xs: "none", md: "flex" }, columnGap: "20px" }}>
//   <a href="https://twitter.com/">
//     <img src="twitter.svg" alt="twitter" />
//   </a>

//   <a href="https://t.me/">
//     <img src="telegram.svg" alt="telegram" />
//   </a>
// </Box>
// </Box>
