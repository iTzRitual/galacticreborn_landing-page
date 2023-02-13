import React from "react";

interface TransparentButtonProps {
  children: React.ReactNode;
}

function StickyButton({ children }: TransparentButtonProps) {
  return (
    <div
      style={{
        padding: "10px 35px",
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
      {children}
    </div>
  );
}

export default StickyButton;
