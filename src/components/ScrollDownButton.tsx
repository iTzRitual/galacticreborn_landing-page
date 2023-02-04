import React from "react";
import { Button } from "@mui/material";
import arrowImg from "../assets/arrow-down-purple-white.svg";

interface ScrollProps {
  scrollTo: string;
}

function ScrollDownButton({ scrollTo }: ScrollProps) {
  const handleClick = () => {
    const element = document.getElementById(scrollTo.toLowerCase());
    if (element) {
      element.scrollIntoView();
    }
  };

  return (
    <Button
      onClick={handleClick}
      className="scroll-down__button"
      sx={{
        display: "flex",
        columnGap: "5px",
      }}
    >
      <span>NEXT</span>
      <img src={arrowImg} alt="&#8593" />
    </Button>
  );
}

export default ScrollDownButton;
