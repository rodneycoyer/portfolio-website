import * as React from "react";

import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import { makeStyles } from "@mui/styles";

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from "@mui/icons-material/Twitter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDocker } from "@fortawesome/free-brands-svg-icons/faDocker";


const useStyles = makeStyles((theme) => ({
    icon: {
        color: "#f44336",
        "&:hover": {
            color: "#c5cae9"
        }
    }
}));

const Social = ({ direction }) => {
    const styles = useStyles();

    return (
        <Stack container direction={direction || "row"} spacing={2} pt={2}>
            <Link
                to="https://www.linkedin.com/in/rodney-coyer-b2922b72/"
                target="blank"
            >
                <IconButton>
                    <LinkedInIcon className={styles.icon} />
                </IconButton>
            </Link>
            <Link
                to="https://github.com/rodneycoyer"
                target="blank"
            >
                <IconButton>
                    <GitHubIcon className={styles.icon}/>
                </IconButton>
            </Link>
            <Link
                to="https://twitter.com/rodneycoyer"
                target="blank"
            >
                <IconButton>
                    <TwitterIcon className={styles.icon} />
                </IconButton>
            </Link>
            <Link
                to=""
                target="blank"
            >
                <IconButton>
                    <FontAwesomeIcon icon={faDocker} className={styles.icon} />
                </IconButton>
            </Link>
        </Stack>
    );
}

export default Social;