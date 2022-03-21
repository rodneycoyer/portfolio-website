import * as React from "react";
import { useState, useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Grow from "@mui/material/Grow";
import Hidden from "@mui/material/Hidden";
import { makeStyles } from "@mui/styles";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Typewriter from "typewriter-effect";

import Social from "./SocialComponent";

const useStyles = makeStyles((theme) => ({
  content: {
      height: "100%",
      zIndex: 1,
      position: "absolute",
  },
  container: {
    height: "90vh",
    position: "relative",
  },
  hero_image: {
      height: "90vh",
      width: "100%",
      zIndex: 0,
      position: "absolute"
  },
}));

export default function HeroSection() {
  const styles = useStyles();
  const [shouldShow, setShouldShow] = useState(false);
  useEffect(() => setShouldShow(true), []);

  return (
    <Paper>
      <Container className={styles.container} maxWidth="false" disableGutters>
        <StaticImage
          className={styles.hero_image}
          src="../images/header-background.jpg"
          alt="silhouette of a person walking on beach, during sunset, at Ruby Beach, Wa"
          layout="fullWidth"
          as="div"
          loading="eager"
        />
        <Grid
          className={styles.content}
          container
          direction="row"
          alignContent="center"
          justifyContent="center"
          component="div"
        >
          <Grow in={shouldShow} timeout={{enter: 1500}} component="div">
            <Grid item mr={14} ml={2}>
              <Typography component="div" variant="h1" color="#0288d1">
              <strong>Hello World_</strong>
              </Typography>

              <Typography component="div" variant="h3">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .pauseFor(500)
                      .typeString(`I'm Rod and this is my`)
                      .pauseFor(350)
                      .typeString('<br/><span style="color: #f44336;"><strong> portfolio site.</strong></span>')
                      .start();
                  }}
                />
              </Typography>
            </Grid>
          </Grow>
          <Hidden mdDown>
            <Grow in={shouldShow} timeout={{enter: 6000}}>
              <Grid item component="div" ml={14}>
                <Social direction="column" />
              </Grid>
            </Grow>
          </Hidden>
        </Grid>
      </Container>
    </Paper>
  );
}