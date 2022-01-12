import React, { useState, useEffect } from "react";
import {
  Button, Box, Container, Grid, Grow, Hidden,
  makeStyles, Paper, Typography, Zoom
} from "@material-ui/core/";
import MailOutlineIcon from "@material-ui/icons/MailOutline"
import { StaticImage } from "gatsby-plugin-image";
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
  overlay: {
      background: "linear-gradient(105deg, black, transparent, black)",
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
          <Zoom in={shouldShow} style={{ transitionDelay: shouldShow ? '700ms' : '0ms' }}>
            <Grid item lg={9}>
              <Typography component="h1" variant="h2">
               <em>Hi There!!</em>
              </Typography>
              <Typography component="div" variant="h3">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .pauseFor(1000)
                      .typeString('My name is Rodney.')
                      .pauseFor(1000)
                      .typeString(`<br /> I'm a <span style="color: #DC143C;"> problem solver...</span>`)
                      .pauseFor(700)
                      .deleteChars(20)
                      .typeString('<span style="color: #00BFFF;">creative...</span>')
                      .pauseFor(1000)
                      .deleteChars(11)
                      .typeString('a <span style="color: 	#DC143C;"> software engineer.</span>')
                      .start();
                  }}
                />
              </Typography>
              <Box my={3} gridColumn="span 3">
                <Button
                  href="mailto:rodney.coyer@gmail.com"
                  variant="outlined"
                  color="secondary"
                  startIcon={<MailOutlineIcon />}
                >
                  Email Me
                </Button>
              </Box>
            </Grid>
          </Zoom>
          <Hidden smDown>
            <Grow in={shouldShow} timeout={{enter: 2500}}>
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