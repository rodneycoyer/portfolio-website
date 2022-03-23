import * as React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton"
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

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
                mt={10}
                mb={2}
                textAlign="center"
            >
                <Container >
                    <Stack
                        direction="row"
                        spacing={4}
                        mb={2}
                        justifyContent="center"
                    >
                        <Link
                            href="https://www.linkedin.com/in/rodney-coyer-b2922b72/"
                            target="blank"
                        >
                            <IconButton>
                                <LinkedInIcon />
                            </IconButton>
                        </Link>
                        <Link
                            href="https://github.com/rodneycoyer"
                            target="blank"
                        >
                            <IconButton>
                                <GitHubIcon />
                            </IconButton>
                        </Link>
                        <Link
                            href="https://twitter.com/rodneycoyer"
                            target="blank"
                        >
                            <IconButton>
                                <TwitterIcon />
                            </IconButton>
                        </Link>
                        <Link
                            href="https://hub.docker.com/repositories"
                            target="blank"
                        >
                            <IconButton>
                                <FontAwesomeIcon icon={faDocker} />
                            </IconButton>
                        </Link>
                        <Link
                            href="mailto:rodney.coyer@gmail.com"
                            target="blank"
                        >
                            <IconButton>
                                <MailOutlineIcon />
                            </IconButton>
                        </Link>
                    </Stack>
                    <Typography variant="overline">
                        © rodney coyer {new Date().getFullYear()} | built using
                    </Typography>
                    <Stack direction="row" spacing={4} mt={2} mb={8} justifyContent="center">
                        <a href="https://gatsbyjs.com/" target="_blank" rel="noreferrer">
                            <img src="https://www.datocms-assets.com/205/1624021714-cover.png?w=300"       alt="gatsby.js logo" width="40" height="auto"/>
                        </a>
                        <a href="https://graphql.org/" target="_blank" rel="noreferrer">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/2048px-GraphQL_Logo.svg.png" alt="graphql logo" width="40" height="auto" />
                        </a>
                        <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="react.js logo" width="40" height="auto" />
                        </a>
                        <a href="https://jamstack.org/" target="_blank" rel="noreferrer">
                            <img src="https://jamstack.org/img/logo/transparent/Jamstack_Icon_White_Transparent.png" alt="jamstack logo" width="40" height="auto" />
                        </a>
                        <a href="https://mui.com/" target="_blank" rel="noreferrer">
                            <img src="https://mui.com/static/logo.png" alt="mui logo" width="40" height="auto" />
                        </a>
                        <a href="https://www.netlify.com/" target="_blank" rel="noreferrer">
                            <img src="https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg" alt="netlify cli" width="40" height="auto" />
                        </a>
                    </Stack>
                </Container>
            </Box>
        </footer>
    );
}

export default Footer;