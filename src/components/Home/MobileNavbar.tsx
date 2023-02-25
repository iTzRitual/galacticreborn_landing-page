import { Box, Button } from "@mui/material";
import React from "react";
import Socials from "./Socials";
import MenuIcon from "../../assets/menu_icon.svg";

function MobileNavbar() {
  const handleMenuClick = () => {
    const pageBody = document.getElementById("app-container");
    const menuBody = document.getElementById("app-mobile-menu");
    const html = document.documentElement;
    if (pageBody && menuBody) {
      pageBody.classList.add("mobileMenuOpen");
      menuBody.classList.add("mobileMenuOpen");
      html.style.overflowY = "hidden";
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
        <img src={MenuIcon} alt="Menu Icon" />
      </Button>
      <Socials />
    </Box>
  );
}

export default MobileNavbar;
