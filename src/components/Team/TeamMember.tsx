import { Box, Typography } from "@mui/material";
import React from "react";

interface TeamMemberProps {
  avatar: string;
  nickname: string[];
  roles: string[];
  glow: string;
}

function TeamMember({ avatar, nickname, roles, glow }: TeamMemberProps) {
  return (
    <Box
      sx={{
        width: "fit-content",
      }}
    >
      <img src={avatar} alt="avatar" className={`app-team-member-avatar ${glow}`} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "10px",
          width: "100%",
        }}
      >
        <Typography fontSize="24px" fontFamily="Space">
          {nickname.map((letter) => (
            <span key={letter} style={letter.length === 1 ? { fontSize: "30px" } : {}}>
              {letter}
            </span>
          ))}
        </Typography>
        {roles.map((role) => (
          <Typography key={role}>{role}</Typography>
        ))}
      </Box>
    </Box>
  );
}

export default TeamMember;
