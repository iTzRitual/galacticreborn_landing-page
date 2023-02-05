import { Box, Button } from "@mui/material";
import React from "react";
import Socials from "./Socials";
import MenuIcon from "../../assets/menu_icon.svg";

function MobileNavbar() {
  const handleMenuClick = () => {
    const pageBody = document.getElementById("app-container");
    if (pageBody) {
      pageBody.classList.add("mobileMenuOpen");
    }
  };
  return (
    <Box
      sx={{
        color: "white",
        margin: "20px 25px 0 10px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Button onClick={handleMenuClick}>
        <img src={MenuIcon} />
      </Button>
      <Socials />
    </Box>
  );
}

export default MobileNavbar;
