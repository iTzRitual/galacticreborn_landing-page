import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import arrowImg from "../assets/go_to_top.svg";

function StickyButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: 20,
        right: 20,
        display: showButton ? "block" : "none",
      }}
    >
      <Button
        onClick={handleClick}
        sx={{
          borderRadius: "20px",
          fontFamily: "Inter",
          fontWeight: "700",
          fontSize: "16px",
          color: "white",
          border: "2px solid #6F5BDE",
          textTransform: "none",
          height: "64px",
          width: "64px",
        }}
      >
        <img src={arrowImg} alt="Scroll to top" />
      </Button>
    </div>
  );
}

export default StickyButton;
