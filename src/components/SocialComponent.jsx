import React from "react";
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Grid from "@material-ui/core/Grid";
import { IconButton, Link } from "@material-ui/core";

const socialItems = [
    {icon: GitHubIcon, url: ""},
    {icon: TwitterIcon, url: ""},
    {icon: LinkedInIcon, url: ""}
];

const Social = ({ direction }) => {
    return (
        <Grid container direction={direction || "row"} spacing={1}>
            {socialItems.map((item) => (
                <Grid item>
                    <Link href={item.url}>
                        <IconButton>
                            <item.icon />
                        </IconButton>
                    </Link>
                </Grid>
            ))}
        </Grid>
    );
}

export default Social;