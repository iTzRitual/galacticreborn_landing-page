import React from "react";

import { Box, Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
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
    roles: ["Full-Stack Developer", "Solidity Developer"],
    glow: "team-member1-glow",
  },
  {
    avatar: avatar4,
    nickname: ["H", "rs", "L", "xrd"],
    roles: ["Front-End Developer", "UI/UX Designer"],
    glow: "team-member2-glow",
  },
  {
    avatar: avatar3,
    nickname: ["B", "omber", "M", "an"],
    roles: ["Project Manager", "Marketing"],
    glow: "team-member3-glow",
  },
  {
    avatar: avatar2,
    nickname: ["M", "ilo"],
    roles: ["Full-Stack Developer", "Research"],
    glow: "team-member4-glow",
  },
];

function TeamDesktop() {
  const theme = useTheme();
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
          marginBottom: "90px",
          justifyContent: "center",
          color: "white",
          paddingBottom: "50px !important",
          paddingLeft: "50px !important",
          paddingRight: "50px !important",
          [theme.breakpoints.down(600)]: {
            paddingLeft: "0 !important",
            paddingRight: "0 !important",
            marginTop: "-20px",
          },
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
            alignItems: "center",
          }}
        >
          <Typography
            fontSize="20px"
            fontFamily="Inter"
            overflow="hidden"
            color="#C0C0C0"
            sx={{
              fontWeight: "200",
              [theme.breakpoints.down(1600)]: {
                padding: "0 20px",
              },
              [theme.breakpoints.down(600)]: {
                fontSize: "16px",
                maxWidth: "375px",
              },
            }}
          >
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
            marginTop: "110px",
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
