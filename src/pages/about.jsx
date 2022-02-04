import * as React from "react";
import { Link } from "gatsby";
import Seo from "../components/SeoComponent";
import Skills from "../components/SkillsComponent";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

import TopLayout from "../../plugins/gatsby-plugin-top-layout/TopLayoutComponent";

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
    color: "white",
    "&:hover": {
      color: '#f44336'
    },
  }
}))

export default function AboutPage() {
  const styles = useStyles();

  return (
    <TopLayout>
      <Seo
        title="About"
        keywords={[`gatsby`, `react`, `material-ui`, `graphql`, `portfolio`, `javascript`, `about`]}
      />
      <Box>
        <Container maxWidth="md">
          <Box mt={4}>
            <Typography
              component={"h1"}
              variant="h2"
              style={{color: "#f44336"}}
              mt={8}
              mb={2}
            >
            <strong> about(me) </strong>
          </Typography>
          </Box>
          <Box>
            <Typography variant="button">
              full-stack software engineer based out of the greater Seattle area.
            </Typography>
            <br />
            <br />
            <Typography component={"p"} variant="p">
              I have a lot of fun working on web, mobile, and cloud apps and contributing to Open Source projects.
              I seek knowledge and understanding so I build projects, read articles, listen to podcasts, and contribute code in my spare time.
            <br />
            <br />
              When I'm not pushing code, you can find me in the outdoors on an adventure, working the bbq-smoker, or dunking oreo's.
            <br />
            <br />
              Lately I've been into Jamstack and cloud infrastructure technologies like AWS, Docker, and Kubernetes.
            <br />
              You can check out some of my <Link to="/projects" className={styles.link}> <strong><em> projects here </em></strong> </Link>, or at one my <a className={styles.link} href="https://github.com/rodneycoyer" target="blank" aria-label="github link"><strong><em> gitHub repo </em></strong></a>.
            </Typography>
          </Box>
          <Box align="right">
            <Typography
              component={"h2"}
              variant="h3"
              align="right"
              noWrap
              style={{color: "#ffa726"}}
              mt={4} mb={3}
            >
              <strong><code>&#123; techStack &#125;</code></strong>
            </Typography>
          </Box>
        </Container>
      </Box>
      <Skills />
    </TopLayout>
  );
}
