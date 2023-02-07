import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";

const textMobileStyle = {
  color: "#C0C0C0",
  marginTop: "15px",
  maxWidth: "375px",
  fontSize: "16px",
  padding: "0 15px",
};

const textDesktopStyle = {
  color: "#C0C0C0",
  marginTop: "15px",
  maxWidth: "723px",
  fontSize: "20px",
};

function Content() {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <Box
      sx={{
        fontFamily: "Space !important",
      }}
    >
      <Typography
        variant={isMobile ? "h4" : "h3"}
        sx={{ color: "white", fontWeight: "bold", marginTop: "81px", fontFamily: "inherit" }}
      >
        UNIVERSE
      </Typography>
      <Typography
        variant={isMobile ? "h4" : "h3"}
        sx={{ color: "white", fontWeight: "bold", fontFamily: "inherit" }}
      >
        IN YOUR HANDS
      </Typography>
      <Typography sx={isMobile ? textMobileStyle : textDesktopStyle} paragraph>
        Lörem ipsum dögt antityns: för bäkur i sav klustersmitta nesor ovissa fast tihet. Teration
        asat prerade i bens. Preck infrade vins antepisa jöv om autov, suprall. Megad hör prelerat
        och stenomast bäns stöddjur i krohor makrolig lere. Dere håtrelig om revisok dor mms:a
        flitbonus döhet inte håringar. Lägode minnespinne rer med klimatlarm i nedögåkick och uvik
        epifehet fasock, epigån faling preling kontopi gängar infrarat även om vyn, epis neling.
        Masavis diar åska, fån pir med infrande euroktig, gäss ridörtad inte preledes huruvida fär
        fatänt jöhången aver men kav förutom dism heterorirade hönas. Fening speliga, bänera visk
        or, förutom made fapyn spetspatient lasodurtad om än dolig nidade tetrafäras såsom prenyn
        att dododa tills plaviledes i telent bin. Sms-livräddare stereoaktiv nenar kun då did
        gigekonomi.
      </Typography>
    </Box>
  );
}

export default Content;
