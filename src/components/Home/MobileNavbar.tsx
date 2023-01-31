import { Tooltip, Box, IconButton, MenuItem, Typography, Menu, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import Socials from "./Socials";

const pages = ["Home", "About", "Roadmap", "About us", "FAQ"];

function MobileNavbar() {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleButtonClick = (page: string) => {
    // scroll to section
    const element = document.getElementById(page.toLowerCase());
    if (element) {
      element.scrollIntoView();
    }
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = (page: string) => {
    setAnchorElUser(null);
    handleButtonClick(page);
  };
  return (
    <Box
      sx={{
        color: "white",
        marginTop: "20px",
        marginLeft: "20px",
        display: "flex",
        justifyContent: "end",
      }}
    >
      <Socials />
      <Button
        sx={{
          color: "#6f5bde",
          width: "139px",
          marginLeft: "20px",
          fontFamily: "Inter",
          fontWeight: 700,
          marginRight: "20px",
        }}
        className="app-get-started-button"
      >
        Get Started
      </Button>
      <Tooltip title="Open menu">
        <IconButton onClick={handleOpenUserMenu} color="inherit">
          <MenuIcon />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {pages.map((page) => (
          <MenuItem key={page} onClick={() => handleCloseUserMenu(page)}>
            <Typography textAlign="center" fontFamily="Inter" fontWeight="700">
              {page}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}

export default MobileNavbar;
