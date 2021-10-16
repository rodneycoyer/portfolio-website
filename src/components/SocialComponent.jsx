import React from "react";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from "@material-ui/icons/Twitter";
import { IconButton, Link, Grid, makeStyles } from "@material-ui/core";
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