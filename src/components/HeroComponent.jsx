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

  return (
    <Paper>
      <StaticImage
        className={styles.hero_image}
        src="../images/header-background.jpg"
        alt="silhouette of a person walking on beach, during sunset, at Ruby Beach, Wa"
        layout="fullWidth"
        as="image"
        loading="eager"
      />
      <Container className={styles.container} maxWidth="md">
        <Grid
          className={styles.content}
          container
          justifyContent="space-between"
          alignItems="center"
          component="div"
        >
          <Grow in={shouldShow} timeout={{enter: 1500}} component="div">
            <Grid item md={12} lg={9} >

              <Typography component="div" variant="h1" color="#1a237e">
               <strong>Hello World_</strong>
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
            </Grid>
          </Grow>
          <Hidden lgDown>
            <Grow in={shouldShow} timeout={{enter: 6000}}>
              <Grid item component="div">
                <Social direction="column" />
              </Grid>
            </Grow>
          </Hidden>
        </Grid>
      </Container>
    </Paper>
  );
}