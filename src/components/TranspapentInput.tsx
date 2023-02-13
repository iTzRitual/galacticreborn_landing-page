import React from "react";

interface TransparentInputProps {
  children: React.ReactNode;
}

function StickyButton({ children }: TransparentInputProps) {
  return (
    <div
      style={{
        padding: "10px 15px",
        backgroundColor: "white",
        color: "black",
        mixBlendMode: "screen",
        fontSize: "16px",
        borderRadius: "15px",
        fontFamily: "Inter",
        fontWeight: "700",
        textAlign: "center",
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
        type="number"
        style={{
          outline: "none",
          border: "none",
          fontWeight: "700",
          fontFamily: "Inter",
          fontSize: "16px",
          MozAppearance: "textfield",
        }}
        placeholder="min. 100"
      />
      {children}
    </div>
  );
}

export default StickyButton;
