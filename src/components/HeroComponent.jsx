import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Social from "./SocialComponent";
import Hidden from "@material-ui/core/Hidden";
import Zoom from "@material-ui/core/Zoom";
import MailOutlineIcon from "@material-ui/icons/MailOutline"
import { StaticImage } from "gatsby-plugin-image";
import Typewriter from "typewriter-effect";

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
      height: "100%",
  },
  overlay: {
      background: "rgba(05, 06, 35, 0.7)",
      height: "100%",
      width: "100%",
      position: "absolute",
      zIndex: 2,
  },
  heroImage: {
      height: "100%",
      width: "100%",
      zIndex: 1,
  },
}));

export default function HeroSection() {
  const styles = useStyles();
  const [shouldShow, setShouldShow] = useState(false);
  useEffect(() => setShouldShow(true), []);
  return (
    <Paper className={styles.section}>
      <StaticImage
        className={styles.heroImage}
        src="../images/header-background.jpg"
        alt="silhouette of a person walking on beach, during sunset, at Ruby Beach, Wa"
        style={{ position: "absolute" }}
      />
      <div className={styles.overlay}></div>
      <Container className={styles.container} maxWidth="md">
        <Grid
          className={styles.content}
          container
          justifyContent="space-between"
          alignItems="center"
        >
          <Zoom in={shouldShow} style={{ transitionDelay: shouldShow ? '500ms' : '0ms' }}>
            <Grid item sm={9}>







              <Typography component="h1" variant="h3">



            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(1000)
                  .typeString('Howdy! <br /> ')
                  .pauseFor(300)
                  .typeString('My name is Rodney. <br />')
                  .pauseFor(500)
                  .typeString(`I'm creative`)
                  .pauseFor(300)
                  .deleteChars(8)
                  .typeString('a problem solver...')
                  .pauseFor(300)
                  .deleteChars(17)
                  .typeString('software engineer')
                  .start();
              }}
            />
              </Typography>
              <Typography variant="h5">
                Writing code for web and mobile based applications is what I do.
              </Typography>










              <Box my={3} sm={9}>
                <Button
                  href="mailto:rodney.coyer@gmail.com"
                  variant="outlined"
                  color="secondary"
                  startIcon={<MailOutlineIcon />}
                >
                  Email Me
                </Button>
              </Box>
              <Hidden smUp>
                <Grid item>
                  <Social direction="row" />
                </Grid>
              </Hidden>
            </Grid>
          </Zoom>
          <Hidden xsDown>
            <Grid item>
              <Social direction="column" />
            </Grid>
          </Hidden>
        </Grid>
      </Container>
    </Paper>
  );
}