import React from "react";
import { Box, CardContent, Container, Grid, Icon, makeStyles, Typography } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faReact} from "@fortawesome/free-brands-svg-icons/faReact"
import {faDocker} from "@fortawesome/free-brands-svg-icons/faDocker"
import {faNodeJs} from "@fortawesome/free-brands-svg-icons/faNodeJs"
import {faHtml5} from "@fortawesome/free-brands-svg-icons/faHtml5"
import {faAws} from "@fortawesome/free-brands-svg-icons/faAws"
import {faBootstrap} from "@fortawesome/free-brands-svg-icons/faBootstrap"
import { faCloud,faDatabase, faServer, faSearch, faLock, faFingerprint, faPassport } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles((theme) => ({
    icon: {
        margin: 5,
        color: "#b2ff59",
        "&:hover": {
            color: "#9fa8da"
        }
    }
}));

const SkillsPage = () => {
    const styles = useStyles();

    return (
        <Box px={{ xs: 3, sm: 5 }} py={{ xs: 5, sm: 5 }}>
            <Container>
                <Typography variant="h4" align="center" color="textSecondary">
                    Skills && Tech
                </Typography>
                <br/>
                <Grid container spacing={2} align="center">
                    <Grid item xs={6} sm={4}>
                        <Box sx={{maxWidth: 250}} >
                            <CardContent >
                                <Icon color="secondary" className={styles.icon}>
                                    <FontAwesomeIcon icon={faHtml5} size="2x" />
                                </Icon>
                                <Icon color="secondary" className={styles.icon}>
                                    <FontAwesomeIcon icon={faBootstrap} size="2x" />
                                </Icon>
                                <Typography variant="h6" component="h2">
                                    HTML / CSS
                                </Typography>
                                <Typography variant="body2">
                                    HTML5, CSS, Bootstrap, SASS, jQuery
                                </Typography>
                            </CardContent>
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <Box sx={{maxWidth: 250}} >
                            <CardContent >
                                <Icon color="secondary" className={styles.icon}>
                                    <FontAwesomeIcon icon={faServer} size="lg" />
                                </Icon>
                                <Icon color="secondary" className={styles.icon}>
                                    <FontAwesomeIcon icon={faReact} size="2x" />
                                </Icon>
                                <Icon color="secondary" className={styles.icon}>
                                    <FontAwesomeIcon icon={faNodeJs} size="lg" />
                                </Icon>
                                <Typography variant="h6" component="h2">
                                    JavaScript
                                </Typography>
                                <Typography variant="body2">
                                    React, React Native, Gatsby, Node, Express
                                </Typography>
                            </CardContent>
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <Box sx={{maxWidth: 250}} >
                            <CardContent >
                                <Icon color="secondary" className={styles.icon}>
                                    <FontAwesomeIcon icon={faCloud} size="lg" />
                                </Icon>
                                <Icon color="secondary" className={styles.icon}>
                                    <FontAwesomeIcon icon={faDatabase} size="2x" />
                                </Icon>
                                <Icon color="secondary" className={styles.icon}>
                                    <FontAwesomeIcon icon={faAws} size="lg" />
                                </Icon>
                                <Typography variant="h6" component="h2">
                                    Databases
                                </Typography>
                                <Typography variant="body2">
                                    MongoDB, Firebase
                                </Typography>
                            </CardContent>
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <Box sx={{maxWidth: 250}} >
                            <CardContent >
                                <Icon color="secondary" className={styles.icon}>
                                    <FontAwesomeIcon icon={faSearch} size="2x" />
                                </Icon>
                                <Typography variant="h6" component="h2">
                                    Query
                                </Typography>
                                <Typography variant="body2">
                                    REST, GraphQl
                                </Typography>
                            </CardContent>
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <Box sx={{maxWidth: 250}} >
                            <CardContent >
                                <Icon color="secondary" className={styles.icon}>
                                    <FontAwesomeIcon icon={faDocker} size="2x" />
                                </Icon>
                                <Typography variant="h6" component="h2">
                                    DevOps
                                </Typography>
                                <Typography variant="body2">
                                    Docker
                                </Typography>
                            </CardContent>
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <Box sx={{maxWidth: 250}} >
                            <CardContent >
                                <Icon color="secondary" className={styles.icon}>
                                    <FontAwesomeIcon icon={faPassport} size="lg" style={{margin: 5}} />
                                </Icon>
                                <Icon color="secondary" className={styles.icon}>
                                    <FontAwesomeIcon icon={faLock} size="2x" style={{margin: 5}} />
                                </Icon>
                                <Icon color="secondary" className={styles.icon}>
                                    <FontAwesomeIcon icon={faFingerprint} size="lg" style={{margin: 5}} />
                                </Icon>
                                <Typography variant="h6" component="h2">
                                    Other Tools
                                </Typography>
                                <Typography variant="body2">
                                    OAuth 2.0, JWT, Passport, Redux
                                </Typography>
                            </CardContent>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default SkillsPage;