import React from "react";
import { Sidebar } from "../../components";
import { useLoading } from "../../utils/hooks/useLoading";
import { Fade } from "react-awesome-reveal";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function NotFound() {
  const { LoadingScreen } = useLoading();

  return (
    // Box component is for desktop and large devices view while Typo is for mobile, scroll to see
    <div className="body">
      <Sidebar />
      <LoadingScreen />

      <Container maxWidth="xl">
        <Fade triggerOnce>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/" // The '/' Routes to the homepage on clicked see the App.js for more info on routes
            sx={{
              mr: 6,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              ml: 14,
              mt: 37 + 1.3.011,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            SENTIMO
          </Typography>
          <Typography // Typo for mobile devices
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 0,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              ml: 1.001 + 37,
              mt: 3,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Err! Page not found!
          </Typography>
        </Fade>
        <Fade>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Fade
              triggerOnce
              style={{
                marginLeft: "540px",
                marginBottom: "300px",
                marginRight: "400px",
                marginTop: "300px",
                textAlign: "center",
              }}
            >
              <h1 style={{ textAlign: "center" }}>
                <code>
                  <span>Error! Page not found!</span>
                </code>
              </h1>
            </Fade>
          </Box>
        </Fade>
      </Container>
    </div>
  );
}
