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
        color: "#7986cb",
        "&:hover": {
            color: "#c5cae9"
        }
    }
}))

const Social = ({ direction }) => {
    const styles = useStyles();

    return (
        <Grid container direction={direction || "row"} spacing={1}>
            <Grid item>
                <Link
                    href="https://www.linkedin.com/in/rodney-coyer-b2922b72/"
                    target="blank"
                >
                    <IconButton>
                        <LinkedInIcon className={styles.icon} />
                    </IconButton>
                </Link>
            </Grid>
            <Grid item>
                <Link
                    href="https://github.com/rodneycoyer"
                    target="blank"
                >
                    <IconButton>
                        <GitHubIcon className={styles.icon}/>
                    </IconButton>
                </Link>
            </Grid>
            <Grid item>
                <Link
                    href="https://twitter.com/rodneycoyer"
                    target="blank"
                >
                    <IconButton>
                        <TwitterIcon className={styles.icon} />
                    </IconButton>
                </Link>
            </Grid>
            <Grid item>
                <Link
                    href="https://codepen.io/roofwalker"
                    target="blank"
                >
                    <IconButton>
                        <FontAwesomeIcon icon={faCodepen} className={styles.icon} />
                    </IconButton>
                </Link>
            </Grid>
            <Grid item>
                <Link
                    href=""
                    target="blank"
                >
                    <IconButton>
                        <FontAwesomeIcon icon={faDocker} className={styles.icon} />
                    </IconButton>
                </Link>
            </Grid>
        </Grid>
    );
}

export default Social;