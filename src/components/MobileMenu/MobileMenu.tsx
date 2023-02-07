import React from "react";
import { Box, Button } from "@mui/material";
import CloseMenuIcon from "../../assets/close_menu_icon.svg";

const pages = ["Home", "About", "Roadmap", "About us", "FAQ"];

export default function MobileMenu() {
  const handleButtonClick = (page: string) => {
    const element = document.getElementById(page.toLowerCase());
    const pageBody = document.getElementById("app-container");
    const menuBody = document.getElementById("app-mobile-menu");
    if (element) {
      element.scrollIntoView();
      if (pageBody && menuBody) {
        pageBody.classList.remove("mobileMenuOpen");
        menuBody.classList.remove("mobileMenuOpen");
      }
    }
  };
  const handleMenuClick = () => {
    const pageBody = document.getElementById("app-container");
    const menuBody = document.getElementById("app-mobile-menu");
    if (pageBody && menuBody) {
      pageBody.classList.remove("mobileMenuOpen");
      menuBody.classList.remove("mobileMenuOpen");
    }
  };
  return (
    <Box
      id="app-mobile-menu"
      sx={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        left: "-100vw",
        top: 0,
        transform: "translateX(0)",
        transition: ".3s",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          color: "white",
          margin: "20px 25px 0 10px",
          display: "flex",
          justifyContent: "start",
        }}
      >
        <Button sx={{ height: "46px" }} onClick={handleMenuClick}>
          <img src={CloseMenuIcon} alt="close" />
        </Button>
      </Box>
      <Box
        sx={{
          flexGrow: "2",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "35px",
        }}
      >
        {pages.map((page) => (
          <Button
            key={page}
            onClick={() => handleButtonClick(page)}
            sx={{
              borderBottom: "2px solid transparent",
              fontSize: "32px",
              fontFamily: "Space",
              color: "#C0C0C0",
            }}
          >
            {page}
          </Button>
        ))}
      </Box>
    </Box>
  );
}
