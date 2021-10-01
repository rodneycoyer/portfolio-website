import React from "react";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import Grid from "@material-ui/core/Grid";
import { IconButton, Link } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDocker } from "@fortawesome/free-brands-svg-icons/faDocker";
import { faCodepen } from "@fortawesome/free-brands-svg-icons";

// todo: research how to map material.ui and f-awesome icons. Error returns.
const socialItems = [
    {icon: LinkedInIcon, url: "https://www.linkedin.com/in/rodney-coyer-b2922b72/"},
    {icon: GitHubIcon, url: "https://github.com/roofwalker"},
    {icon: FacebookIcon, url: "https://www.facebook.com/rodney.coyer"},
    {icon: faCodepen, url: "https://codepen.io/roofwalker"},
];

const Social = ({ direction }) => {
    return (
        <Grid container direction={direction || "row"} spacing={1}>
            <Grid item>
                <Link href="https://www.linkedin.com/in/rodney-coyer-b2922b72/">
                    <IconButton color="default">
                        <LinkedInIcon color="secondary" />
                    </IconButton>
                </Link>
            </Grid>
            <Grid item>
                <Link href="https://github.com/roofwalker">
                    <IconButton color="default">
                        <GitHubIcon color="secondary" />
                    </IconButton>
                </Link>
            </Grid>
            <Grid item>
                <Link href="">
                    <IconButton color="default">
                        <TwitterIcon color="secondary" />
                    </IconButton>
                </Link>
            </Grid>
            <Grid item>
                <Link href="https://codepen.io/roofwalker">
                    <IconButton color="default">
                        <FontAwesomeIcon icon={faCodepen} style={{color:"red"}} />
                    </IconButton>
                </Link>
            </Grid>
            <Grid item>
                <Link href="">
                    <IconButton color="default">
                        <FontAwesomeIcon icon={faDocker} style={{color:"red"}} />
                    </IconButton>
                </Link>
            </Grid>
        </Grid>
    );
}

export default Social;