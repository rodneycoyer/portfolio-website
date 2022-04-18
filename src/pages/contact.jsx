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

export default function ContactPage(props) {
  const styles = useStyles();

  return (
    <TopLayout {...props}>
      <Seo
        title="About"
        keywords={[`gatsby`, `react`, `material-ui`, `graphql`, `portfolio`, `javascript`, `contact`]}
      />
      <Box mb={40}>
        <Container maxWidth="md">
          <Box mt={4} >
            <Typography
              component={"h1"}
              variant="h4"
              sx={{ color: "#f44336" }}
              mt={8}
              mb={2}
            >
            <strong> CONTACT ME </strong>
          </Typography>
          <Typography
              component={"h2"}
              variant="h5"
              style={{color: "#ffa726"}}
              mt={4} mb={1}
            >
              <strong> Let's Connect! </strong>
            </Typography>
            <Typography variant="p" color="text.secondary"> I'm currently growing my network and making new friends! The easiest way to reach me is via email:<Link href="mailto:rodney.coyer@gmail.com" target="blank" className={styles.link}> rodneycoyer@gmail.com </Link> or <Link href="https://www.linkedin.com/in/rodney-coyer" target="blank" className={styles.link}> LinkedIn </Link> .
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
              <a
                href="https://twitter.com/rodneycoyer"
                target="blank"
                rel="noreferrer">
                <img
                  src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg"
                  alt="twitter rodneycoyer"
                  width="60" /></a>
            </Stack>
          </Box>
        </Container>
      </Box>
    </TopLayout>
  );
}
