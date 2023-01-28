import * as React from "react";
import { useMediaQuery } from "@mui/material";

import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

function Navbar() {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return <div>{isMobile ? <MobileNavbar /> : <DesktopNavbar />}</div>;
}
export default Navbar;
