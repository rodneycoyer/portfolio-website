import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/LayoutComponent";
import Seo from "../components/SeoComponent";
import Skills from "../components/SkillsComponent";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography"


export default function AboutPage() {

  return (
    <Layout>
      <Seo
        title="About"
        keywords={[`gatsby`, `react`, `material-ui`, `graphql`, `portfolio`, `javascript`, `About`]}
      />
      <Skills />
      <Box px={{ xs: 3, sm: 5 }} py={{ xs: 15, sm: 15 }}>
        <Container maxWidth="md">
          <Box>
          <Link
            to="/"
            variant="button"
          >
            Home
          </Link>

          <Typography variant="h4" mt={2} mb={2}>
            about
          </Typography>
          </Box>
          <Box>
            <Typography variant="p">
              I'm Rodney and a software engineer based out of the greater Seattle area.
              <br />
              <br/>
              I work on web and mobile apps and contribute to Open Source projects. I seek knowledge and understanding so I build projects, or read, in my spare time to learn.
              <br />
              <br />
              When I'm not pushing code, you can find me in the outdoors or cooking.
              <br />
              <br />
              Lately I've been working in Jamstack and with infrastructure tech with AWS, Docker, and Kubernetes. You can check out some of my projects here, or at one of my repos.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
}
