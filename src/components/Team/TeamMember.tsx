import { Box, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

interface TeamMemberProps {
  avatar: string;
  nickname: string[];
  roles: string[];
  glow: string;
}

function TeamMember({ avatar, nickname, roles, glow }: TeamMemberProps) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        [theme.breakpoints.down(1300)]: {
          width: "calc(50% - 12.5px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        },
      }}
    >
      <img src={avatar} alt="avatar" className={`app-team-member-avatar ${glow}`} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
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
          <Typography
            sx={{
              fontFamily: "Inter",
              fontSize: "16px",
              color: "#B3B3B3",
            }}
            key={role}
          >
            {role}
          </Typography>
        ))}
      </Box>
    </Box>
  );
}

export default TeamMember;
