import * as React from "react";

import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
// fa brand icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons/faReact";
import { faDocker } from "@fortawesome/free-brands-svg-icons/faDocker";
import { faNodeJs } from "@fortawesome/free-brands-svg-icons/faNodeJs";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons/faHtml5";
import { faAws } from "@fortawesome/free-brands-svg-icons/faAws";
import { faBootstrap } from "@fortawesome/free-brands-svg-icons/faBootstrap";
// fa icons
import { faCloud } from "@fortawesome/free-solid-svg-icons/faCloud";
import { faDatabase } from "@fortawesome/free-solid-svg-icons/faDatabase";
import { faServer } from "@fortawesome/free-solid-svg-icons/faServer";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import { faLock } from "@fortawesome/free-solid-svg-icons/faLock";
import { faFingerprint } from "@fortawesome/free-solid-svg-icons/faFingerprint";
import { faPassport } from "@fortawesome/free-solid-svg-icons/faPassport";

const useStyles = makeStyles((theme) => ({
    icon: {
        margin: 5,
        paddingBottom: 40,
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
                <Grid container spacing={2} align="center">
                    <Grid item xs={6} sm={4}>
                        <Box sx={{maxWidth: 250}} >
                            <CardContent>
                                <Icon fontSize="large" className={styles.icon}>
                                    <FontAwesomeIcon icon={faHtml5}/>
                                </Icon>
                                <Icon fontSize="large" className={styles.icon}>
                                    <FontAwesomeIcon icon={faBootstrap} />
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
                                <Icon fontSize="large" className={styles.icon}>
                                    <FontAwesomeIcon icon={faServer} />
                                </Icon>
                                <Icon fontSize="large" className={styles.icon}>
                                    <FontAwesomeIcon icon={faReact} />
                                </Icon>
                                <Icon fontSize="large" className={styles.icon}>
                                    <FontAwesomeIcon icon={faNodeJs} />
                                </Icon>
                                <Typography variant="h6" component="h2">
                                    JavaScript
                                </Typography>
                                <Typography variant="body2">
                                    React, React Native, Gatsby, Node, Express, ES5, ES6
                                </Typography>
                            </CardContent>
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <Box sx={{maxWidth: 250}} >
                            <CardContent >
                                <Icon fontSize="large" className={styles.icon} style={{paddingRight: 50}}>
                                    <FontAwesomeIcon icon={faCloud} />
                                </Icon>
                                <Icon fontSize="large" className={styles.icon} style={{paddingRight: 10}}>
                                    <FontAwesomeIcon icon={faDatabase} />
                                </Icon>
                                <Icon fontSize="large" className={styles.icon} style={{paddingRight: 50}}>
                                    <FontAwesomeIcon icon={faAws} />
                                </Icon>
                                <Typography variant="h6">
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
                                <Icon fontSize="large" className={styles.icon}>
                                    <FontAwesomeIcon icon={faSearch} />
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
                                <Icon fontSize="large" className={styles.icon} style={{paddingRight: 50, paddingLeft: 10}}>
                                    <FontAwesomeIcon icon={faDocker} />
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
                                <Icon fontSize="large" className={styles.icon}>
                                    <FontAwesomeIcon icon={faPassport} />
                                </Icon>
                                <Icon fontSize="large" className={styles.icon}>
                                    <FontAwesomeIcon icon={faLock} />
                                </Icon>
                                <Icon fontSize="large" className={styles.icon}>
                                    <FontAwesomeIcon icon={faFingerprint} />
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