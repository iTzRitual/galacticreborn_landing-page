import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";

import arrowStage from "../../assets/arrow_stages.svg";
import check from "../../assets/check_ring_round_light.svg";

interface StageProps {
  stage: string;
  description: string;
  stagePoints: string[];
  readyPoints: boolean[];
}

const descriptionMobileStyle = {
  fontFamily: "Space",
  textAlign: "left",
  fontSize: "16px",
  color: "#C0C0C0",
  marginTop: "5px",
};

const descriptionDesktopStyle = {
  fontFamily: "Space",
  textAlign: "left",
  fontSize: "20px",
  lineHeight: "1",
  color: "#C0C0C0",
  marginTop: "-5px",
};

const pointMobileStyle = {
  fontFamily: "Inter",
  textAlign: "left",
  fontSize: "16px",
  marginLeft: "10px",
  color: "#C0C0C0",
};

const pointDesktopStyle = {
  fontFamily: "Inter",
  textAlign: "left",
  fontSize: "20px",
  fontWeight: "200",
  marginLeft: "10px",
  color: "#C0C0C0",
};

const boxMobileStyle = {
  marginTop: "80px",
  width: "80%",
  minWidth: "auto",
};

const boxDesktopStyle = {
  marginTop: "80px",
  width: "40%",
  minWidth: "500px",
};

function Stage({ stage, description, stagePoints, readyPoints }: StageProps) {
  const isMobile = useMediaQuery("(max-width: 600px)");
  return (
    <Box sx={isMobile ? boxMobileStyle : boxDesktopStyle}>
      <Typography
        variant={isMobile ? "h5" : "h4"}
        sx={{ fontFamily: "Space", textAlign: "left", fontSize: "36px" }}
      >
        {stage}
      </Typography>
      <Typography sx={isMobile ? descriptionMobileStyle : descriptionDesktopStyle}>
        {description}
      </Typography>
      {stagePoints.map((point, index) => (
        <Box
          key={point}
          sx={{
            display: "flex",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <img src={readyPoints[index] ? check : arrowStage} alt="arrow" />
          <Typography sx={isMobile ? pointMobileStyle : pointDesktopStyle}>{point}</Typography>
        </Box>
      ))}
    </Box>
  );
}

export default Stage;
