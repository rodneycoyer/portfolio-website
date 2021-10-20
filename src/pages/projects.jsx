import React from "react";
import { Link, graphql } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import Seo from "../components/SeoComponent";
import Layout from "../components/LayoutComponent";
import { Box, Card, CardContent, CardMedia, CardActionArea, Container, CssBaseline, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  link: {
    marginTop: 5,
    textDecoration: "none",
    color: "white",
        "&:hover": {
        color: "#d50000"
    },
  },
  heading: {
    marginTop: 150,
    marginBottom: 15
  },
  card: {
    maxWidth: 345,
    marginBottom: 25,
  }
  
}));

const ProjectsPage = ({ data }) => {
  const styles = useStyles();
    return (
      <Layout>
        <Seo title="projects" />
        <Container maxWidth="lg">
            <Typography variant="h4" className={styles.heading}> Projects and Labs </Typography>
            <Box>
              <Link to="/" className={styles.link}> Home </Link>
            </Box>
            <hr />
            <p>below are some of the latests projects and experiments</p>
            <Grid container align="center">
              
            </Grid>
        </Container>
      </Layout>
    );
}

export default ProjectsPage;