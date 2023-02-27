import React from "react";

interface MediumProps {
  color?: string;
  className?: string;
}

function Medium({ color, className }: MediumProps) {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M20 10.3564C20 13.0058 19.556 15.1549 19.0081 15.1549C18.4602 15.1549 18.0164 13.0064 18.0164 10.3564C18.0164 7.7064 18.4604 5.55786 19.0081 5.55786C19.5558 5.55786 20 7.7062 20 10.3564Z" />
      <path d="M17.4689 10.3564C17.4689 13.3142 16.2062 15.7129 14.6486 15.7129C13.091 15.7129 11.8282 13.3142 11.8282 10.3564C11.8282 7.39867 13.0908 4.99997 14.6484 4.99997C16.206 4.99997 17.4688 7.3979 17.4688 10.3564" />
      <path d="M11.2812 10.3564C11.2812 13.4987 8.75578 16.046 5.6407 16.046C2.52561 16.046 0 13.4981 0 10.3564C0 7.21472 2.52542 4.66666 5.6407 4.66666C8.75598 4.66666 11.2812 7.21414 11.2812 10.3564Z" />
    </svg>
  );
}

Medium.defaultProps = {
  color: "white",
  className: "",
};

export default Medium;
