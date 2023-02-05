import React from "react";

import { useMediaQuery } from "@mui/material";
import TeamMobile from "./TeamMobile";
import TeamDesktop from "./TeamDesktop";

function Team() {
  const isMobile = useMediaQuery("(max-width: 600px)");
  return isMobile ? <TeamMobile /> : <TeamDesktop />;
}

export default Team;
