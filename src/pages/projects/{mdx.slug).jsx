import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { Box, Container } from "@material-ui/core";

import Layout from "../../components/LayoutComponent";
import Seo from "../components/SeoComponent";

const FeaturedProject = ({ data }) => {
    return (
        <Layout>
            <Seo pageTitle="" />
            <h1>Content will go here</h1>
            <Box px={{ xs: 3, sm: 5 }} py={{ xs: 15, sm: 15 }} >
                <Container maxWidth="lg">
                    <Link> Back </Link>
                    <h1>Featured Project Content</h1>
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