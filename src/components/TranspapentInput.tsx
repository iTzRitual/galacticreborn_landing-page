/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box } from "@mui/material";
import React from "react";

interface TransparentInputProps {
  children: React.ReactNode;
  onChange: (event: any) => void;
  value: string;
}

function TransparentInput({ children, onChange, value }: TransparentInputProps) {
  return (
    <Box
      sx={{
        padding: "10px 15px",
        backgroundColor: "white",
        color: "black",
        mixBlendMode: "screen",
        fontSize: "16px",
        borderRadius: "15px",
        fontFamily: "Inter",
        fontWeight: "700",
        textAlign: "center",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      {/* 
      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
      */}
      <input
        type="text"
        pattern="[0-9]+"
        value={value}
        onChange={onChange}
        style={{
          outline: "none",
          border: "none",
          fontWeight: "700",
          fontFamily: "Inter",
          fontSize: "16px",
          width: "100%",
          MozAppearance: "textfield",
        }}
        placeholder="0.00"
      />
      {children}
    </Box>
  );
}

export default TransparentInput;
