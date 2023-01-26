import * as React from "react";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Socials from "./Socials";

const pages = ["Home", "About", "Roadmap", "About us", "FAQ"];

const buttonDefaultStyle = {
  my: 3,
  color: "white",
  display: "block",
  fontSize: "14px",
  fontWeight: 700,
  textTransform: "capitalize",
  minWidth: "90px",
};

function Navbar() {
  const [isPageActive, setIsPageActive] = React.useState<string>("Home");

  const handleButtonClick = (page: string) => {
    setIsPageActive(page);
  };

  return (
    <Container maxWidth="xl" className="app-navbar-container ">
      <Toolbar disableGutters>
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, columnGap: "2%" }}>
          {pages.map((page) => (
            <Button
              key={page}
              onClick={() => handleButtonClick(page)}
              sx={{
                ...buttonDefaultStyle,
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
      </Toolbar>
    </Container>
  );
}
export default Navbar;
