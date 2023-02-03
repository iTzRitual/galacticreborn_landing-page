import React from "react";
import { Button } from "@mui/material";
import arrowImg from "../../assets/arrow-down-purple-white.svg";

interface ScrollProps {
    scrollTo: string,
}

function ScrollDownButton(props: ScrollProps) {
    
    const handleClick = () => {
        const element = document.getElementById(props.scrollTo.toLowerCase());
        if (element) {
            element.scrollIntoView();
          }
    };

    return (
        <Button 
            onClick={handleClick}
            className="scroll-down__button" 
            sx={{
                display:"flex", 
                columnGap: "5px"
            }}>
            <span>NEXT</span>
            <img src={arrowImg}></img>
        </Button>
    );
}

export default ScrollDownButton