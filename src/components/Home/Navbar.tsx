import * as React from "react";
import { useMediaQuery } from "@mui/material";

import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

function Navbar() {
  const isMobile = useMediaQuery("(max-width: 900px)");

  return isMobile ? <MobileNavbar /> : <DesktopNavbar />;
}
export default Navbar;
