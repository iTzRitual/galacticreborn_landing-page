import { Button } from "@mui/material";
import React from "react";

interface TransparentButtonProps {
  text: string;
  marginTop?: string;
  onClick: () => void;
}

function TransparentButton({ text, marginTop, onClick }: TransparentButtonProps) {
  return (
    <Button
      onClick={onClick}
      type="button"
      sx={{
        padding: "10px 35px",
        backgroundColor: "white",
        color: "black",
        mixBlendMode: "screen",
        fontSize: "16px",
        borderRadius: "15px",
        fontFamily: "Inter",
        fontWeight: "700",
        textAlign: "center",
        marginTop,
        border: "none",
        outline: "none",
        textTransform: "capitalize",

        ":hover": {
          backgroundColor: "white",
          color: "black",
        },
      }}
    >
      {text}
    </Button>
  );
}

TransparentButton.defaultProps = {
  marginTop: "0",
};

export default TransparentButton;
