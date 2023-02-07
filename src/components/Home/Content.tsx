import React from "react";
import { Box, Button, Container, Typography, useMediaQuery } from "@mui/material";
import ContentMobile from "./ContentMobile";
import ArrowImg from "../../assets/arrow-short";
import { useTheme } from "@mui/material/styles";

const buttonDefaultStyle = {
  color: "white",
  display: "flex",
  fontSize: "14px",
  fontWeight: 700,
  textTransform: "capitalize",
  fontFamily: "Inter",
  border: "2px solid #6f5bde",
  borderRadius: "25px",
  columnGap: "10px",
  paddingLeft: "25px",
  paddingRight: "15px",
};

export default function Content() {
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width: 600px)");
  return (
    <div>
      <Container
        sx={{
          height: "100%",
          width: "100%",
          minHeight: "80vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
            color: "white",
            marginLeft: "100px",
            maxWidth: "550px",
            [theme.breakpoints.down(1600)]: {
              marginLeft: "50px",
            },
            [theme.breakpoints.down(1168)]: {
              marginLeft: "auto",
              marginRight: "auto",
              width: "800px",
              maxWidth: "100%",
              textAlign: "center",
            },
            lineHeight: "1",
          }}
        >
          {useMediaQuery(theme.breakpoints.down(1168)) && (
            <Typography
              sx={{
                fontSize: "48px",
                fontFamily: "Space",
                lineHeight: 1,
                textAlign: "center",
                marginBottom: "40px",
              }}
            >
              Galactic <br /> Reborn
            </Typography>
          )}
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "1rem",
              fontFamily: "Inter",
            }}
          >
            PRESALE IS LIVE
          </Typography>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "3rem",
              lineHeight: "3rem",
              marginTop: "10px",
              marginBottom: "10px",
              whiteSpace: "wrap",
              fontFamily: "Inter",
            }}
          >
            Lörem ipsum antiheten nyning
          </Typography>
          <Typography
            sx={{
              fontFamily: "Inter",
              color: "#C0C0C0;",
            }}
          >
            Lörem ipsum aveck gigan eller esat. Farat bifar nusår hexalililiga. Ovivaligt ultrar
            fixie. Kyrktrappsbröllop mansplaining nöbigen. Mavis dogmafilm orat hemin. Deform
            krisväska. Parov.
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "20px",
              marginTop: "40px",
              [theme.breakpoints.down(1168)]: {
                flexDirection: "column",
                width: "200px",
                gap: "15px",
                marginLeft: "auto",
                marginRight: "auto",
              },
            }}
          >
            <Button
              sx={{
                ...buttonDefaultStyle,
                minWidth: "172px",
                color: "#6f5bde",
              }}
            >
              Whitepaper
              <ArrowImg direction={0} color="#6F5BDE" />
            </Button>
            <Button
              sx={{
                ...buttonDefaultStyle,
                minWidth: "111px",
                backgroundColor: "#6f5bde",
              }}
            >
              FAQ
              <ArrowImg direction={0} color="#FFF" />
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
