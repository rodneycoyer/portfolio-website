import React from "react";
import { Box, Container, Grid, Link, IconButton, makeStyles } from "@material-ui/core";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from "@material-ui/icons/Twitter";
import MailOutlineIcon from "@material-ui/icons/MailOutline"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDocker } from "@fortawesome/free-brands-svg-icons/faDocker";
import { faCodepen } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";


const useStyles = makeStyles((theme) => ({
    icon: {
        color: "#9fa8da",
        "&:hover": {
            color: "#e8eaf6"
        },
    },
    space: {
        marginRight: 20,
        marginLeft: 20,
        marginBottom: 15,
    }
}))

const Footer = () => {
    const styles = useStyles();
    return (
        <footer>
            <Box
                sx={{ display: "flex" }}
                p={{ xs: 3 }}
                bgcolor="black"
                textAlign="center"
            >
                <Container>
                    <Grid container alignItems="center">
                        <Grid item xs={12}>
                            <Link href="https://www.linkedin.com/in/rodney-coyer-b2922b72/">
                                <IconButton className={styles.space}>
                                    <LinkedInIcon color="primary" className={styles.icon} />
                                </IconButton>
                            </Link>
                            <Link href="https://github.com/roofwalker">
                                <IconButton className={styles.space}>
                                    <GitHubIcon color="primary" className={styles.icon} />
                                </IconButton>
                            </Link>
                            <Link href="https://codepen.io/roofwalker">
                                <IconButton className={styles.space}>
                                    <FontAwesomeIcon icon={faCodepen}  className={styles.icon} />
                                </IconButton>
                            </Link>
                            <Link href="">
                                <IconButton className={styles.space}>
                                    <FontAwesomeIcon icon={faDocker} className={styles.icon} />
                                </IconButton>
                            </Link>
                            <Link href="">
                                <IconButton className={styles.space}>
                                    <TwitterIcon className={styles.icon} />
                                </IconButton>
                            </Link>
                            <Link href="">
                                <IconButton className={styles.space}>
                                    <MailOutlineIcon className={styles.icon} />
                                </IconButton>
                            </Link>
                            <Box pb={{ xs: 2 }}>
                                Powered with <FontAwesomeIcon icon={faReact} /> Gatsby
                                <br />
                                © rodneycoyer {new Date().getFullYear()}
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </footer>
    );
}

export default Footer;