import React from "react";

import { Box, Container, Typography } from "@mui/material";
import Background from "../Background";
import TeamMember from "./TeamMember";

import avatar1 from "../../assets/avatar1.webp";
import avatar2 from "../../assets/avatar2.webp";
import avatar3 from "../../assets/avatar3.webp";
import avatar4 from "../../assets/avatar4.webp";

const teamMembers = [
  {
    avatar: avatar1,
    nickname: ["B", "ad", "O", "ne"],
    roles: ["Founder", "Full-Stack Developer"],
    glow: "team-member1-glow",
  },
  {
    avatar: avatar4,
    nickname: ["H", "rs", "L", "xrd"],
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
    nickname: ["M", "ilo"],
    roles: ["Research", "Full-Stack Developer"],
    glow: "team-member4-glow",
  },
];

function TeamDesktop() {
  return (
    <Background height="fit-content" className="app-image-background-team">
      <Container
        id="team"
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
            display: "flex",
            flexDirection: "column",
            rowGap: "15px",
          }}
        >
          <Typography fontSize="24px" fontFamily="Inter" overflow="hidden" color="#C0C0C0">
            Embark on a journey through the vast expanse of the crypto-universe with our team of
            pioneering space explorers. With expertise in game development, marketing, and product
            management, our team is equipped to guide you through the uncharted territories of our
            browser galaxy expansion and conquest game. Each member brings unique skills and
            experiences, fueling our mission to discover new frontiers in the crypto world. Join us
            as we boldly go where no one has gone before in our quest for the ultimate space
            discovery
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
            rowGap: "50px",
            columnGap: "25px",
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

export default TeamDesktop;
