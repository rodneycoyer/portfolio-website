import React, { Component } from "react";
import { Box, Card, CardContent, CardMedia, CardActionArea, Container, Grid, Typography } from "@material-ui/core";


class ProjectDirectory extends Component {
    render() {
        const directory = this.props.projects.map(project => {
            return (
                <Grid item xs={12} sm={6} md={4} key={project.id}>
                    <Card sx={{ maxWidth: 345}} >
                        <CardActionArea>
                            <CardMedia>
                                <React.Fragment>
                                    <img
                                        src={project.image}
                                        alt={project.briefDescription}
                                        height="125"
                                    />
                                </React.Fragment>
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {project.name}
                                </Typography>
                                <Typography variant="body2" color="secondary">
                                    {project.briefDescription}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            );
        });

        return (
            <Box px={{ xs: 3, sm: 5 }} py={{ xs: 3, sm: 5 }}>
                <Container maxWidth="lg" id="#projects">
                    <Typography variant="h4" >
                        Projects
                    </Typography>
                    <Grid container spacing={2}>
                        {directory}
                    </Grid>
                </Container>
            </Box>
        );
    }
}

export default ProjectDirectory;