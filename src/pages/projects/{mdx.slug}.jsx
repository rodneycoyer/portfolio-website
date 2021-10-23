import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { Box, Container, Grid, makeStyles, Paper } from "@material-ui/core";

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
        alignItems: "center"
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
                <Container maxWidth="lg" >
                    <Grid container className={styles.hero_heading} align="center" >
                        <Grid item>
                            <h1> {data.mdx.frontmatter.title} </h1>
                            <h2> {data.mdx.frontmatter.short_description} </h2>
                        </Grid>
                    </Grid>
                    <Grid container className={styles.hero_footer}>
                        <Grid item>
                            <h3>context</h3>
                        </Grid>
                        <Grid item>
                            <h3>tech stack</h3>
                        </Grid>
                        <Grid item>
                            <h3>role</h3>
                        </Grid>
                    </Grid>
                </Container>
            </Paper>
            <Box px={{ xs: 3, sm: 5 }} py={{ xs: 15, sm: 15 }} >
                <Container maxWidth="lg">
                    <Grid container justifyContent="center" align="center">
                        <Grid item>
                            <h1>Project Overview</h1>
                            <p>{data.mdx.frontmatter.full_description}</p>
                        </Grid>

                    </Grid>
                    <Grid container>
                        <Grid item>
                            <h1>Concepts, Tech & Design</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam asperiores et commodi itaque aut. Veniam quam inventore rem iusto. Id, officiis! Quos, iusto pariatur. Id aperiam ipsa eius optio tenetur, recusandae perspiciatis corporis illo dolorem officia voluptates modi corrupti debitis temporibus atque magnam harum, inventore maiores vitae excepturi ratione facilis, adipisci voluptatibus nesciunt? Quod itaque dolore porro unde nihil vel soluta illo, deleniti possimus vitae ratione ut id distinctio laboriosam error ullam ad aliquam temporibus blanditiis sed ipsam minus modi? Vitae exercitationem repellat illum sint ab blanditiis recusandae molestiae, dolor excepturi sapiente ea pariatur maxime delectus impedit eos soluta nihil debitis libero voluptatibus. Consequuntur ex nesciunt placeat. Praesentium corporis ratione beatae, autem ea velit dignissimos voluptatibus temporibus nostrum nesciunt minima repudiandae reprehenderit voluptate?
                            </p>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur alias provident doloribus expedita voluptatibus quis accusantium earum perspiciatis autem vero assumenda ut, reiciendis quo dolor explicabo quae commodi quibusdam, iure labore. Inventore esse dolore doloremque suscipit laborum soluta quaerat laudantium, animi odio autem quo perferendis at consequuntur officia molestiae delectus, fugiat tempore natus impedit quibusdam? Necessitatibus enim reiciendis voluptatibus velit esse. Corporis id et, officiis impedit sunt esse illo, animi neque commodi, blanditiis modi porro quas aspernatur delectus cumque? Tenetur, fuga dolor quis rem consectetur voluptate inventore dolorem et, provident assumenda fugit. Autem provident voluptates aperiam illo totam tempora incidunt enim similique tempore laboriosam ratione illum quo, est neque nihil culpa ab minima perferendis dolorum. Excepturi id sed tempore aliquid nam fugiat qui distinctio incidunt, quidem non aut aliquam voluptatum atque repudiandae tenetur molestiae soluta harum cupiditate ex corporis similique. Tenetur placeat omnis sint nostrum minus iusto veritatis! Perspiciatis, id itaque assumenda voluptatum doloremque sapiente quis sunt laudantium eos facere quam quo porro recusandae mollitia vitae minus facilis soluta rem libero quidem sed commodi? Incidunt dolor magnam alias sequi ad debitis assumenda reprehenderit labore maxime soluta. Quos, sint dicta? Quae, atque vel saepe fuga earum in, ratione doloremque ex mollitia dicta praesentium illo pariatur! At impedit et maxime rerum voluptate nemo, molestias ipsum officiis perspiciatis voluptatem qui eligendi consequuntur non culpa explicabo praesentium, iste facere a? Voluptatibus similique porro distinctio vitae, illum quod accusamus.
                            </p>
                        </Grid>
                    </Grid>
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