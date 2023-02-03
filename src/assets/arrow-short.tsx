import React from "react";
import { Button } from "@mui/material";
import arrowImg from "../../assets/arrow-down-purple-white.svg";

interface ArrowProps {
    // 0 is right
    direction: number,
    color: string
}

export default function ScrollDownButton(props: ArrowProps) {
    const transformRotate = {transform: [{rotate: props.direction + 'deg'}]}
    return (
        <svg style={{transform: `rotate(${props.direction})`}} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.76001 4.99997L14.6163 10.5481C15.449 11.3369 15.449 12.663 14.6163 13.4519L8.76001 19" stroke={props.color} strokeWidth="2" strokeLinecap="round"/>
        </svg>
    );
}

