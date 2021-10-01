import React from "react";
import { Button, Card, CardContent, CardMedia, CardActions, CardActionArea, Container, Grid, Typography } from "@material-ui/core";
import { StaticImage } from "gatsby-plugin-image";

const projects = [
    {
        id: 0,
        name: "Project 1",
        image: "../images/icon.png",
        briefDescription: "brief description of project",
        fullDescription: "full description of project and tech used.",
    },
    {
        id: 1,
        name: "Project 2",
        image: "../images/icon.png",
        briefDescription: "brief description of project",
        fullDescription: "full description of project and tech used.",
    },
    {
        id: 2,
        name: "Project 3",
        image: "../images/icon.png",
        briefDescription: "brief description of project",
        fullDescription: "full description of project and tech used.",
    },
    {
        id: 3,
        name: "Project 4",
        image: "../images/icon.png",
        briefDescription: "brief description of project",
        fullDescription: "full description of project and tech used.",
    },
];

function RenderProjectCard({ project }) {
    return (
            <Card >
                <CardActionArea>
                    <CardMedia>
                        <React.Fragment>
                            <StaticImage
                                src="../images/header-background.jpg"
                                alt="silhouette of a person walking on beach, during sunset, at Ruby Beach, Wa"
                            />
                        </React.Fragment>
                    </CardMedia>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Project Title
                        </Typography>
                        <Typography variant="body2" color="secondary">
                            Brief description of project
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button>View More</Button>
                </CardActions>
            </Card>
    );
}

const ProjectPage = ({props}) => {

    const directory = projects.map(project => {
        return (
            <Grid item xs={6} md={4} lg={4} key={project.id}>
                <RenderProjectCard />
            </Grid>
        );
    });

    return (
        <Container maxWidth="lg">
            <Grid container spacing={2} justifyContent="center">
                {directory}
            </Grid>
        </Container>
    );
}

export default ProjectPage;