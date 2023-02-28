import React from "react";
import { Box, Button } from "@mui/material";
import CloseMenuIcon from "../../assets/close_menu_icon.svg";

const pages = ["Home", "About", "Roadmap", "Team", "Docs"];

export default function MobileMenu() {
  const handleButtonClick = (page: string) => {
    const element = document.getElementById(page.toLowerCase());
    const html = document.documentElement;
    const pageBody = document.getElementById("app-container");
    const menuBody = document.getElementById("app-mobile-menu");
    if (element) {
      element.scrollIntoView();
      if (pageBody && menuBody) {
        pageBody.classList.remove("mobileMenuOpen");
        menuBody.classList.remove("mobileMenuOpen");
        html.style.overflowY = "auto";
      }
    }
  };
  const handleMenuClick = () => {
    const pageBody = document.getElementById("app-container");
    const menuBody = document.getElementById("app-mobile-menu");
    const html = document.documentElement;
    if (pageBody && menuBody) {
      pageBody.classList.remove("mobileMenuOpen");
      menuBody.classList.remove("mobileMenuOpen");
      html.style.overflowY = "auto";
    }
  };
  return (
    <Box
      id="app-mobile-menu"
      sx={{
        width: "100%",
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
          margin: "20px 25px 0 16px",
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
          justifyContent: "start",
          gap: "25px",
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
        {/* <Button
          sx={{
            borderBottom: "2px solid transparent",
            fontSize: "32px",
            fontFamily: "Space",
            color: "#C0C0C0",
          }}
        >
          Coming soon
        </Button> */}
      </Box>
    </Box>
  );
}
