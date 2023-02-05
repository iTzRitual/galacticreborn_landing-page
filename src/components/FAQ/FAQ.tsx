import React from "react";

import { useMediaQuery } from "@mui/material";
import FAQDesktop from "./FAQDesktop";
import FAQMobile from "./FAQMobile";

function FAQ() {
  const isMobile = useMediaQuery("(max-width: 600px)");
  return isMobile ? <FAQMobile /> : <FAQDesktop />;
}

export default FAQ;
