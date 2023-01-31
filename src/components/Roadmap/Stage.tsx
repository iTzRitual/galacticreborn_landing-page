import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";

import arrowStage from "../../assets/arrow_stages.svg";

interface StageProps {
  stage: string;
  description: string;
  stagePoints: string[];
}

const descriptionMobileStyle = {
  fontFamily: "Space",
  textAlign: "left",
  fontSize: "15px",
};

const descriptionDesktopStyle = {
  fontFamily: "Space",
  textAlign: "left",
  fontSize: "20px",
  whiteSpace: "nowrap",
};

const pointMobileStyle = {
  fontFamily: "Inter",
  textAlign: "left",
  fontSize: "12px",
  marginLeft: "10px",
};

const pointDesktopStyle = {
  fontFamily: "Inter",
  textAlign: "left",
  fontSize: "20px",
  marginLeft: "10px",
};

const boxMobileStyle = {
  marginTop: "80px",
  width: "80%",
  minWidth: "300px",
};

const boxDesktopStyle = {
  marginTop: "80px",
  width: "40%",
  minWidth: "500px",
};

function Stage({ stage, description, stagePoints }: StageProps) {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <Box sx={isMobile ? boxMobileStyle : boxDesktopStyle}>
      <Typography variant={isMobile ? "h5" : "h4"} sx={{ fontFamily: "Space", textAlign: "left" }}>
        {stage}
      </Typography>
      <Typography sx={isMobile ? descriptionMobileStyle : descriptionDesktopStyle}>
        {description}
      </Typography>
      {stagePoints.map((point) => (
        <Box
          key={point}
          sx={{
            display: "flex",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <img src={arrowStage} alt="arrow" />
          <Typography sx={isMobile ? pointMobileStyle : pointDesktopStyle}>{point}</Typography>
        </Box>
      ))}
    </Box>
  );
}

export default Stage;
