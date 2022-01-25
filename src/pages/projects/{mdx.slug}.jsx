import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Hidden from "@mui/material/Hidden"
import { makeStyles } from "@mui/styles";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography"

import Layout from "../../components/LayoutComponent";

const useStyles = makeStyles((theme) => ({
    section: {
        height: "80vh"
    },
    hero_img: {
        height: "80vh",
        width: "100%",
        objectFit: "cover",
        position: "absolute",
        zIndex: 1,
    },
    hero_overlay: {
        background: "rgba(0, 0, 0, 0.6)",
        height: "80vh",
        width: "100%",
        position: "absolute",
        zIndex: 2,
    },
    hero_heading: {
        height: "70vh",
        zIndex: 100,
        position: "relative",
        justifyContent: "center",
    },
    hero_footer: {
        height: "10vh",
        zIndex: 100,
        position: "relative",
        justifyContent: "space-between",
        alignItems: "center"
    },
}));

const FeaturedProject = ({ data }) => {
    const styles = useStyles();

    return (
        <Layout>
            <Paper className={styles.section}>
                <GatsbyImage
                    className={styles.hero_img}
                    image={getImage(data.mdx.frontmatter.image01)}
                    alt={data.mdx.frontmatter.image01_alt}
                    backgroundColor="lightgray"
                />
            <div className={styles.hero_overlay}></div>
                <Container maxWidth="xl" >
                    <Grid container className={styles.hero_heading} align="center" >
                        <Grid item mt={6}>
                            <Typography component="h1" variant="h2">
                                <strong> {data.mdx.frontmatter.title} </strong>
                            </Typography>
                            <Typography component="h2" variant="h5" color="secondary">
                                {data.mdx.frontmatter.short_description}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Hidden smDown>
                        <Grid container className={styles.hero_footer} align="center" justifyContent="space-between" spacing={1}>
                            <Grid item xs={3}>
                                <Typography variant="button" color="secondary"> type </Typography>
                                <Typography variant="h6">{data.mdx.frontmatter.type}</Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography variant="button" color="secondary"> framework </Typography>
                                <Typography variant="h6">{data.mdx.frontmatter.stack}</Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography variant="button" color="secondary"> role </Typography>
                                <Typography variant="h6">{data.mdx.frontmatter.role}</Typography>
                            </Grid>
                        </Grid>
                    </Hidden>
                </Container>
            </Paper>
            <Box px={{ xs: 3, sm: 5 }} py={{ xs: 15, sm: 15 }} >
                <Container maxWidth="lg">
                    <MDXRenderer>
                        {data.mdx.body}
                    </MDXRenderer>
                </Container>
            </Box>
        </Layout>
    );
}

export const FeaturedQuery = graphql`
    query ($id: String) {
        mdx(id: {eq: $id}) {
            frontmatter {
            title
            website
            github
            dockerHub
            role
            context
            type
            year
            stack
            short_description
            full_description
            lessons_learned
            image01_alt
            image01 {
                childImageSharp {
                    gatsbyImageData(
                    width: 800
                    blurredOptions: {width: 100}
                    transformOptions: {cropFocus: CENTER}
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                    )
                }
            }
            }
            body
        }
    }
`

export default FeaturedProject;