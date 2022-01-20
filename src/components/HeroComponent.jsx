import * as React from "react";
import { useState, useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Grow from "@mui/material/Grow";
import Hidden from "@mui/material/Hidden";
import { makeStyles } from "@mui/styles";
import Paper from "@mui/material/Paper";
import Slide from "@mui/material/Slide";
import Typography from "@mui/material/Typography";
import Typewriter from "typewriter-effect";
import Zoom from "@mui/material/Zoom";

import Social from "./SocialComponent";

const useStyles = makeStyles((theme) => ({
  section: {
      height: "90vh",
  },
  content: {
      height: "100%",
      zIndex: 100,
      position: "relative",
  },
  container: {
      height: "90vh",
  },
  overlay: {
      background: "linear-gradient(100deg, black, transparent, black)",
      height: "90vh",
      width: "100%",
      position: "absolute",
      zIndex: 2,
  },
  hero_image: {
      height: "90vh",
      width: "100%",
      zIndex: 1,
      position: "absolute"
  },
}));

export default function HeroSection() {
  const styles = useStyles();
  const [shouldShow, setShouldShow] = useState(false);
  useEffect(() => setShouldShow(true), []);
  const containerRef = React.useRef(null);

  return (
    <Paper className={styles.section}>
      <StaticImage
        className={styles.hero_image}
        src="../images/header-background.jpg"
        alt="silhouette of a person walking on beach, during sunset, at Ruby Beach, Wa"
      />
      <div className={styles.overlay}></div>
      <Container className={styles.container} maxWidth="md">
        <Grid
          className={styles.content}
          container
          justifyContent="space-between"
          alignItems="center"
        >
          <Zoom in={shouldShow}>
            <Grid item lg={9} >
              <Typography component="h1" variant="h2">
               <em>Hi There and Welcome!</em>
              </Typography>
              <Typography component="div" variant="h3">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .pauseFor(500)
                      .typeString(`I'm Rod and this is my`)
                      .pauseFor(350)
                      .typeString('<br/><span style="color: #ff5722;"><strong> portfolio site.</strong></span>')
                      .start();
                  }}
                />
              </Typography>

              <Box mt={3} ref={containerRef}>
                  <Link
                    to="/about"
                    variant="button"
                    underline="none"
                  >
                    <Slide
                      in={shouldShow}
                      direction="up"
                      container={containerRef.current}
                      timeout={{enter: 5000}}
                    >
                      <Button
                        variant="outlined"
                      >
                        About Me
                      </Button>
                    </Slide>
                  </Link>
              </Box>

            </Grid>
          </Zoom>
          <Hidden smDown>
            <Grow in={shouldShow} timeout={{enter: 6000}}>
              <Grid item>
                <Social direction="column" />
              </Grid>
            </Grow>
          </Hidden>
        </Grid>
      </Container>
    </Paper>
  );
}