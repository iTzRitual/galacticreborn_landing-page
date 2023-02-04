import { Box, Button, Container, Toolbar } from "@mui/material";
import React from "react";
import Socials from "./Socials";
import grLogo from "../../assets/galactic_reborn_logo.png";

const pages = ["Home", "About", "Roadmap", "About us", "FAQ"];

const buttonDefaultStyle = {
  my: 3,
  color: "white",
  display: "block",
  fontSize: "16px",
  fontFamily: "Inter",
  fontWeight: 700,
  textTransform: "capitalize",
  minWidth: "90px",
};

function DesktopNavbar() {
  const [isPageActive] = React.useState<string>("Home");
  const handleButtonClick = (page: string) => {
    // scroll to section
    const element = document.getElementById(page.toLowerCase());
    if (element) {
      element.scrollIntoView();
    }
  };
  return (
    <Container
      maxWidth={false}
      className="app-navbar-container"
      sx={{ paddingLeft: "40px!important", paddingRight: "40px!important" }}
    >
      <Toolbar disableGutters>
        <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
          <img src={grLogo} alt="galactic reborn" />
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
              columnGap: "30px",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleButtonClick(page)}
                sx={{
                  ...buttonDefaultStyle,
                  borderBottom: "2px solid transparent",
                }}
                className={isPageActive === page ? "active" : ""}
              >
                {page}
              </Button>
            ))}
            <Button
              sx={{
                ...buttonDefaultStyle,
                color: "#6f5bde",
                width: "139px",
                marginLeft: "10px",
              }}
              className="app-get-started-button"
            >
              Get Started
            </Button>
            <Socials />
          </Box>
        </Box>
      </Toolbar>
    </Container>
  );
}

export default DesktopNavbar;
