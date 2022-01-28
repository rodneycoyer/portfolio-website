import * as React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton"
import Link from "@mui/material/Link";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDocker } from "@fortawesome/free-brands-svg-icons/faDocker";
import { faCodepen } from "@fortawesome/free-brands-svg-icons/faCodepen";
import { faReact } from "@fortawesome/free-brands-svg-icons/faReact";

const Footer = () => {
    return (
        <footer>
            <Box
                sx={{ display: "flex" }}
                p={{ xs: 3 }}
                textAlign="center"
            >
                <Container >
                    <Grid
                        container
                        spacing={4}
                        justifyContent="center"
                    >
                        <Grid item>
                            <Link
                                href="https://www.linkedin.com/in/rodney-coyer-b2922b72/"
                                target="blank"
                            >
                                <IconButton>
                                    <LinkedInIcon />
                                </IconButton>
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link
                                href="https://github.com/rodneycoyer"
                                target="blank"
                            >
                                <IconButton>
                                    <GitHubIcon />
                                </IconButton>
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link
                                href="https://codepen.io/roofwalker"
                                target="blank"
                            >
                                <IconButton>
                                    <FontAwesomeIcon icon={faCodepen} />
                                </IconButton>
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="">
                                <IconButton>
                                    <FontAwesomeIcon icon={faDocker} />
                                </IconButton>
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link
                                href="https://twitter.com/rodneycoyer"
                                target="blank"
                            >
                                <IconButton>
                                    <TwitterIcon />
                                </IconButton>
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="mailto:rodney.coyer@gmail.com">
                                <IconButton>
                                    <MailOutlineIcon />
                                </IconButton>
                            </Link>
                        </Grid>
                    </Grid>
                    <Box p={{ xs: 2 }}>
                        Powered with <FontAwesomeIcon icon={faReact} /> Gatsby
                        <br />
                        © rodneycoyer {new Date().getFullYear()}
                    </Box>
                </Container>
            </Box>
        </footer>
    );
}

export default Footer;