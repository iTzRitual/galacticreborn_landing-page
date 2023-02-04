import React from "react";

import { Box, Container, Typography } from "@mui/material";
import Background from "../Background";
import TeamMember from "./TeamMember";

import avatar1 from "../../assets/avatar1.png";
import avatar2 from "../../assets/avatar2.png";
import avatar3 from "../../assets/avatar3.png";
import avatar4 from "../../assets/avatar4.png";

const teamMembers = [
  {
    avatar: avatar1,
    nickname: ["B", "ad", "O", "ne"],
    roles: ["Founder", "Full-Stack Developer"],
    glow: "team-member1-glow",
  },
  {
    avatar: avatar4,
    nickname: ["H", "ar", "L", "xrd"],
    roles: ["UI/UX Designer", "Front-End Developer"],
    glow: "team-member2-glow",
  },
  {
    avatar: avatar3,
    nickname: ["B", "omber", "M", "an"],
    roles: ["Project Manager", "Partnerships"],
    glow: "team-member3-glow",
  },
  {
    avatar: avatar2,
    nickname: ["C", "erberus"],
    roles: ["Marketing Manager", "Community Manager"],
    glow: "team-member4-glow",
  },
];

function Team() {
  return (
    <Background className="app-image-background-team">
      <Container
        id="about us"
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "90px",
          color: "white",
          paddingBottom: "50px !important",
        }}
      >
        <Typography fontSize="3rem" fontFamily="Space">
          Team
        </Typography>
        <Box
          sx={{
            width: "100%",
            marginTop: "30px",
          }}
        >
          <Typography fontSize="24px" fontFamily="Inter" overflow="hidden" color="#C0C0C0">
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
        <Box
          sx={{
            display: "flex",
            flexdirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around",
            marginTop: "50px",
            width: "100%",
          }}
        >
          {teamMembers.map((member) => (
            <TeamMember
              key={member.nickname.join("")}
              avatar={member.avatar}
              nickname={member.nickname}
              roles={member.roles}
              glow={member.glow}
            />
          ))}
        </Box>
      </Container>
    </Background>
  );
}

export default Team;
