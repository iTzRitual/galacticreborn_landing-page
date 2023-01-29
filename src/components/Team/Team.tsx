import React from "react";

import { Box, Container, Typography } from "@mui/material";
import Background from "../Background";
import BackgroundImage from "../BackgroundImage";

function Team() {
  return (
    <Background height="fit-content">
      <Container
        id="about us"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "90px",
          color: "white",
          paddingBottom: "50px !important",
        }}
      >
        <Typography fontSize="2.5rem" fontFamily="Space">
          Team
        </Typography>
        <Box
          sx={{
            width: "80%",
            marginTop: "30px",
          }}
        >
          <Typography fontSize="24px" fontFamily="Inter" overflow="hidden">
            Lörem ipsum nynisa tenera, mikronde, i tynde, i kisk, kara geonerat med semiseng, är
            vijigt. Transitflykting olingar en krogänat supradegon, astrosat, teranat polyren min.
            Vinterkräksjuka tempomatisk soheten. Kontrangar jitång, det vill säga anera visenade i
            gensax, plus soktiga, och bästsäljerism por sotyras. Dose inenat: inte symängen att ded
            preppare kroning. Mäns dina: doktigt ekoaktiv och jytes, dekass. Hypotorel årenade
            skräpbot lasell liksom pseudotåder as osm inte heteroskop, ponde, i hemivis. Ir
            hypobelt, jyde i dining samt beser intrant tredoll det vill säga näsa cosplay, nyre
            futet teratt epiv. Krode ultrabyd så fatt och nebel. Rease ferade nefusm utan fafuligt
            biosmos men dekabäling det vill säga bertad hypervalens esk, doläsm fusat, karas, näk.
            Nebens elingar med stenoras, tåjiss fabement dira, emedan kontravis mädons i teda spesm
            speplangen, R-tal svemester derade. Vining int nigen innan pret seling pres mänat i
            vangar fast podda backflyt rura även om niryssade dönat rearat, reasogt ber. Du kan vara
            drabbad.
          </Typography>
        </Box>
      </Container>
      <BackgroundImage className="app-image-background-team " />
    </Background>
  );
}

export default Team;
