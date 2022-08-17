import * as React from "react";
import { Link } from "gatsby";
import Seo from "../components/SeoComponent";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

import TopLayout from "../../plugins/gatsby-plugin-top-layout/TopLayoutComponent";

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
    color: "#fff",
    "&:hover": {
      color: '#f44336'
    },
  }
}))

export default function AboutPage(props) {
  const styles = useStyles();

  return (
    <TopLayout {...props}>
      <Seo
        title="About"
        keywords={[`gatsby`, `react`, `material-ui`, `graphql`, `portfolio`, `javascript`, `about`]}
      />
      <Box>
        <Container maxWidth="md">
          <Box mt={4} >
            <Typography
              component={"h1"}
              variant="h4"
              sx={{ color: "#f44336" }}
              mt={8}
              mb={2}
            >
            <strong> ABOUT ME </strong>
          </Typography>
          </Box>
          <Box>
            <Typography variant={"div"} color="text.secondary">
               Hi and Welcome 👋 I'm Rod and I'm a software engineer in the greater Seattle area 🌲. Welcome to my space in the web where I will share some of the things I've built and learned.
            </Typography>
            <br />
            <br />
            <Typography variant="p" color="text.secondary">
              I'm currently working at <a className={styles.link} href="https://www.chinookroofing.com/" target={"_blank"}> Chinook Building Envelope Services </a> as a Software Developer, Wall Systems Program Developer, and Project Manager.
              <br />
              <br />
              Its a unique roll for my skill-set and I'm excited to work on a diverse set of projects that I'll eventually blog about.
            <br />
            <br />
              You can check out some of my <Link to="/projects" className={styles.link}> <strong> projects here. </strong></Link>
            </Typography>
          </Box>
          <Box>
            <Typography
              component={"h2"}
              variant="h5"
              style={{color: "#ffa726"}}
              mt={4} mb={1}
            >
              <strong> What am I working on? </strong>
            </Typography>

            <ul>
              <li> Oracle NetSuite - developing app integrations and features. </li>
              <li> Evaluating SaaS solutions and software architecture. </li>
              <li> Developing an Architectural Composite Sheet Metal Systems Division. </li>
              <li> Managing some construction projects. </li>
            </ul>
          </Box>
          <Box>
            <Typography
              component={"h2"}
              variant="h5"
              style={{color: "#ffa726"}}
              mt={4} mb={1}
            >
              <strong> Connect with Me </strong>
            </Typography>
            <Typography variant="p" color="text.secondary"> The easiest way to reach me is via email:<Link href="mailto:rodney.coyer@gmail.com" target="blank" className={styles.link}> rodneycoyer@gmail.com </Link>
              <br />
              <br />
            You can also find me on:
            </Typography>
            <Stack mt={4} direction="row" justifyContent={"center"} spacing={4}>
              <a
                href="https://www.linkedin.com/in/rodney-coyer" target="_blank"
                rel="noreferrer">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                  alt="linkedin rcoyer"
                  width="60"
                />
              </a>
              <a
                href="https://github.com/rodneycoyer"
                target="_blank"
                rel="noreferrer">
                <img
                  src="https://www.vectorlogo.zone/logos/github/github-tile.svg"
                  alt="github rcoyer"
                  width="60"
                />
              </a>
            </Stack>
          </Box>
          <Box>
            <Typography
              component={"h2"}
              variant="h5"
              style={{color: "#ffa726"}}
              mt={4} mb={1}
            >
              <strong> Random Facts </strong>
            </Typography>
            <Typography  color="text.secondary" variant="p">
              <ul>
                <li> I built my first html website with Notepad back in 2001. </li>
                <li> I have 2 dogs: BoBo and Bailee. </li>
                <li> House Ravenclaw 🦅 </li>
                <li> I'm an outdoor enthusiast 🌲</li>
                <li> I play finger-style guitar. </li>
                <li> In 2006, I rode a motorcycle from Seattle to Denver. Then back, going through Reno and Norther California.</li>
              </ul>
            </Typography>
          </Box>
        </Container>
      </Box>
    </TopLayout>
  );
}
