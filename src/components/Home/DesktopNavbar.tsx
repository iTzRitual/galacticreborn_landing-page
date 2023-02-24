import { Box, Button, Container, Toolbar } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Socials from "./Socials";
import grLogo from "../../assets/galactic_reborn_logo.png";

const pages = ["Home", "About", "Roadmap", "Team", "Docs"];

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
  const theme = useTheme();
  const [isPageActive, setIsPageActive] = React.useState<string>("Home");
  const isPresalePage = useLocation().pathname.includes("presale");

  const navigate = useNavigate();
  const handleButtonClick = (page: string) => {
    // scroll to section
    let element = document.getElementById(page.toLowerCase());
    if (element) {
      element.scrollIntoView();
    }

    // if presale page, redirect to home page
    if (isPresalePage) {
      navigate("/");
      // scroll to section set delay to wait for page to load
      setTimeout(() => {
        element = document.getElementById(page.toLowerCase());
        if (element) {
          element.scrollIntoView();
        }
      }, 1000);
    }
  };

  useEffect(() => {
    if (isPresalePage) {
      setIsPageActive("Presale");
    }
  }, [isPresalePage]);

  return (
    <Container
      maxWidth={false}
      className="app-navbar-container"
      sx={{ paddingLeft: "40px!important", paddingRight: "40px!important" }}
    >
      <Toolbar disableGutters>
        <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
          {useMediaQuery(theme.breakpoints.up(1169)) && <img src={grLogo} alt="galactic reborn" />}
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
              columnGap: "30px",
              [theme.breakpoints.down(1300)]: {
                columnGap: "10px",
              },
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
              onClick={() => handleButtonClick("community")}
              sx={{
                ...buttonDefaultStyle,
                color: "#6f5bde",
                minWidth: "139px",
                marginLeft: "10px",
                paddingLeft: "20px",
                paddingRight: "20px",
              }}
              className="app-get-started-button"
            >
              Join Community
            </Button>
            <Socials />
          </Box>
        </Box>
      </Toolbar>
    </Container>
  );
}

export default DesktopNavbar;
