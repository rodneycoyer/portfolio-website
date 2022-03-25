import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import { Link } from "gatsby";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Grow from "@mui/material/Grow"
import IconButton from "@mui/material/IconButton";
import { makeStyles } from "@mui/styles";
import Slide from "@mui/material/Slide"
import Tab from "@mui/material/Tab"
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDocker } from "@fortawesome/free-brands-svg-icons";
import { faExpand } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


import Seo from "../../components/SeoComponent";
import TopLayout from "../../../plugins/gatsby-plugin-top-layout/TopLayoutComponent";

const useStyles = makeStyles((theme) => ({
  link: {
    "&:hover": {
      color: theme.palette.primary.main
    },
  }
}));

function RenderProjectCard({ data, node }) {
  const styles = useStyles();

  return (
    <Card className={styles.card} type={node.frontmatter.isOpenSource} key={node.id} aria-label="project card">
      <CardActionArea>
        <Link style={{textDecoration: "none"}} to={`/projects/${node.slug}`}>
          <CardMedia component="div" >
            <GatsbyImage
              id="image"
              image={getImage(node.frontmatter.image01)}
              alt={node.frontmatter.image01_alt}
            />
          </CardMedia>
          <CardContent>
          <Typography variant="h5" color="text.primary">
            {node.frontmatter.title}
          </Typography>
          <Typography variant="body" color="warning.dark" noWrap>
            {node.frontmatter.short_description}
          </Typography>
          </CardContent>
        </Link>
        </CardActionArea>
      <CardActions disableSpacing aria-label="project links">
        <Box style={{ marginRight: "auto" }}>
          <a href={node.frontmatter.website}>
            <IconButton className={styles.link}>
              <FontAwesomeIcon icon={faGlobe} size="sm" />
            </IconButton>
          </a>
          <a href={node.frontmatter.github} >
            <IconButton className={styles.link}>
              <FontAwesomeIcon icon={faGithub} size="sm" />
            </IconButton>
          </a>
          <a href={node.frontmatter.dockerHub}>
            <IconButton className={styles.link}>
              <FontAwesomeIcon icon={faDocker} size="sm" />
            </IconButton>
          </a>
        </Box>
        <Box >
          <Link to={`/projects/${node.slug}`}>
            <IconButton className={styles.link} style={{ justifySelf: "end" }}>
              <FontAwesomeIcon icon={faExpand} size="sm" />
            </IconButton>
          </Link>
        </Box>
      </CardActions>
    </Card>
  );
}

export default function ProjectIndex({ data, props}) {
  const [tabValue, setTabValue] = React.useState(0);
  const containerRef = React.useRef(null);
  const handleChange = (event, newTabValue) => {
    setTabValue(newTabValue);
  };

  const directory = data.allMdx.nodes.map((node) => (
    <Grow in={tabValue === 0} timeout={{enter: 450}}>
      <Grid item xs={12} sm={6} md={4} >
        <RenderProjectCard node={node} key={node.id}/>
      </Grid>
    </Grow>
  ));

  const learningProject = data.allMdx.nodes
    .filter((node => node.frontmatter.isOpenSource === "false"))
    .map((node) => (
      <Slide in={tabValue === 1} container={containerRef.current} direction="right" timeout={{enter: 450}}>
        <Grid item xs={12} sm={6} md={4} >
          <RenderProjectCard node={node} key={node.id}/>
        </Grid>
      </Slide>
    ));

  const isOpenSource = data.allMdx.nodes
    .filter((node => node.frontmatter.isOpenSource === "true"))
    .map((node) => (
      <Slide in={tabValue === 2} container={containerRef.current} direction="right" timeout={{enter: 400}}>
        <Grid item xs={12} sm={6} md={4} >
          <RenderProjectCard node={node} key={node.id}/>
        </Grid>
      </Slide>
    ));

  return (
    <TopLayout>
      <Seo
        title="Projects"
        keywords={[`gatsby`, `react`, `material-ui`, `graphql`, `portfolio`, `javascript`, `projects`]}
      />
      <Container maxWidth="lg">
          <Box mt={4} mb={8}>
            <Typography
              component={"h2"}
              variant="h4"
              color="error"
              mt={8} mb={2}
            >
              <strong>PROJECT BOARD</strong>
            </Typography>
            <Typography variant="p" color={"text.secondary"}>
              This is where I post my cooler stuff. Continue to check in see what I'm working on!
            </Typography>
          </Box>
      </Container>
      <Box>
        <Container maxWidth="lg">
          <Box mt={2} mb={2}>
            <Tabs value={tabValue} onChange={handleChange} aria-label="project tabs">
              <Tab label="all"/>
              <Tab label="learning" />
              <Tab label="open source" />
            </Tabs>
          </Box>
          <Grid container spacing={2} ref={containerRef} aria-label="project grid">
            {tabValue === 0 && directory}
            {tabValue === 1 && learningProject}
            {tabValue === 2 && isOpenSource}
          </Grid>
        </Container>
      </Box>
    </TopLayout>
  );
}

export const ProjectQuery = graphql`
  query {
  allMdx {
    nodes {
      frontmatter {
        title
        website
        github
        dockerHub
        role
        isOpenSource
        context
        year
        stack
        short_description
        full_description
        lessons_learned
        image01_alt
        image01 {
              childImageSharp {
                  gatsbyImageData(
                    width: 500
                    height: 250
                    blurredOptions: {width: 100}
                    transformOptions: {cropFocus: CENTER}
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
              }
          }
      }
      id
      slug
    }
  }
}
`