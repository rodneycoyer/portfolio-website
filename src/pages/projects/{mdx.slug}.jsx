import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { Box, Container, Grid, Paper } from "@material-ui/core";

import Layout from "../../components/LayoutComponent";

const FeaturedProject = ({ data }) => {
    return (
        <Layout>
            <Paper>

                <Box>
                    <Container>
                        <Grid container>
                            <Grid item>

                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Paper>
            <Box px={{ xs: 3, sm: 5 }} py={{ xs: 15, sm: 15 }} >
                <Container maxWidth="lg">
                    <h1>{data.mdx.frontmatter.title}</h1>
                    <h3>{data.mdx.frontmatter.short_description}</h3>
                    <h3>{data.mdx.frontmatter.full_description}</h3>
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
            year
            stack
            short_description
            full_description
            lessons_learned
            image01_alt
            image01 {
                childImageSharp {
                    gatsbyImageData(
                    width: 600
                    height: 600
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