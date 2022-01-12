import * as React from "react";

import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import { makeStyles } from "@mui/styles";

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from "@mui/icons-material/Twitter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDocker } from "@fortawesome/free-brands-svg-icons/faDocker";
import { faCodepen } from "@fortawesome/free-brands-svg-icons";

const useStyles = makeStyles((theme) => ({
    icon: {
        color: "#d50000",
        "&:hover": {
            color: "#ffcdd2"
        }
    }
}))

const Social = ({ direction }) => {
    const styles = useStyles();

    return (
        <Grid container direction={direction || "row"} spacing={1}>
            <Grid item>
                <Link href="https://www.linkedin.com/in/rodney-coyer-b2922b72/">
                    <IconButton>
                        <LinkedInIcon className={styles.icon} />
                    </IconButton>
                </Link>
            </Grid>
            <Grid item>
                <Link href="https://github.com/roofwalker">
                    <IconButton>
                        <GitHubIcon className={styles.icon}/>
                    </IconButton>
                </Link>
            </Grid>
            <Grid item>
                <Link href="">
                    <IconButton>
                        <TwitterIcon className={styles.icon} />
                    </IconButton>
                </Link>
            </Grid>
            <Grid item>
                <Link href="https://codepen.io/roofwalker">
                    <IconButton>
                        <FontAwesomeIcon icon={faCodepen} className={styles.icon} />
                    </IconButton>
                </Link>
            </Grid>
            <Grid item>
                <Link href="">
                    <IconButton>
                        <FontAwesomeIcon icon={faDocker} className={styles.icon} />
                    </IconButton>
                </Link>
            </Grid>
        </Grid>
    );
}

export default Social;