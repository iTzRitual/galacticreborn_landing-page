import { Button, useMediaQuery } from "@mui/material";
import React, { useState, useEffect } from "react";
import arrowImg from "../assets/go_to_top.svg";

const defaultButtonStyle = {
  borderRadius: "20px",
  fontFamily: "Inter",
  fontWeight: "700",
  fontSize: "16px",
  color: "white",
  border: "2px solid #6F5BDE",
  textTransform: "none",
  height: "64px",
  width: "64px",
};

const mobileButtonStyle = {
  borderRadius: "20px",
  fontFamily: "Inter",
  fontWeight: "700",
  fontSize: "16px",
  color: "white",
  border: "2px solid #6F5BDE",
  textTransform: "none",
  height: "32px",
  width: "32px",
};

function StickyButton() {
  const [showButton, setShowButton] = useState(false);

  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      // if page is 30px to bottom hide button
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 30) {
        setShowButton(false);
      }
      // if page is scrolled more than 30px show button
      else if (window.scrollY > 200) {
        setShowButton(true);
      }
      // if page is not scrolled hide button
      else {
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
      <Button onClick={handleClick} sx={isMobile ? mobileButtonStyle : defaultButtonStyle}>
        <img
          src={arrowImg}
          alt="Scroll to top"
          style={
            isMobile
              ? {
                  width: "25px",
                }
              : {}
          }
        />
      </Button>
    </div>
  );
}

export default StickyButton;
