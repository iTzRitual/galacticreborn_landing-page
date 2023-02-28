import React from "react";
import { Box, Button, Container, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ArrowImg from "../ShortArrow";

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
  const isMobile = useMediaQuery(theme.breakpoints.down(450));
  const isTablet = useMediaQuery(theme.breakpoints.down(1168));
  return (
    <div>
      <Container
        sx={{
          height: "100%",
          width: "100%",
          minHeight: "80vh",
          display: "flex",
          justifyContent: "center",
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
            [theme.breakpoints.down(1169)]: {
              marginLeft: "auto",
              marginRight: "auto",
              width: "800px",
              maxWidth: "100%",
              textAlign: "center",
            },
            [theme.breakpoints.down(450)]: {
              paddingTop: "50px",
            },
            lineHeight: "1",
          }}
        >
          {isMobile ? (
            <Typography
              sx={{
                fontSize: "42px",
                fontFamily: "Space",
                lineHeight: 1,
                textAlign: "center",
                marginBottom: "40px",
                [theme.breakpoints.down(385)]: {
                  fontSize: "30px",
                },
              }}
            >
              Galactic <br /> Reborn
            </Typography>
          ) : (
            isTablet && (
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
            )
          )}
          <Typography
            sx={{
              fontWeight: "100",
              fontSize: "1rem",
              lineHeight: "1rem",
              fontFamily: "Inter",
              color: "#C0C0C0;",
            }}
          >
            BROWSER P&E STRATEGIC GAME
          </Typography>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "48px",
              lineHeight: "48px",
              marginTop: "10px",
              marginBottom: "10px",
              whiteSpace: "wrap",
              fontFamily: "Inter",
              [theme.breakpoints.down(385)]: {
                fontSize: "30px",
                lineHeight: "30px",
              },
            }}
          >
            Endless galaxies <br /> are waiting for you!
          </Typography>
          <Typography
            sx={{
              fontFamily: "Inter",
              color: "#C0C0C0;",
              fontSize: "20px",
              fontWeight: "200",
            }}
          >
            Welcome to <span style={{ fontWeight: "400", color: "white" }}>Galactic Reborn</span> -
            the ultimate space conquest game. Create your own empire, battle other players, and
            stake your claim in the universe. Join now and shape the fate of the galaxy!
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "20px",
              marginTop: "25px",
              [theme.breakpoints.down(1169)]: {
                flexDirection: "column",
                width: "200px",
                gap: "15px",
                marginLeft: "auto",
                marginRight: "auto",
              },
            }}
          >
            {/* <Button
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
              Docs
              <ArrowImg direction={0} color="#FFF" />
            </Button> */}
            <Button
              sx={{
                ...buttonDefaultStyle,
                color: "#6f5bde",
              }}
              target="_blank"
              href="https://t.me/galactic_reborn_official_chat"
            >
              Telegram
              <ArrowImg direction={0} color="#6F5BDE" />
            </Button>
            <Button
              sx={{
                ...buttonDefaultStyle,
                backgroundColor: "#6f5bde",
              }}
              target="_blank"
              href="https://discord.gg/galacticreborn"
            >
              Discord
              <ArrowImg direction={0} color="#FFF" />
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
