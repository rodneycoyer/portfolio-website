import React from "react";
import Link from "@material-ui/core/Link"
import { AppBar, Container, makeStyles, Slide, Toolbar, useScrollTrigger } from "@material-ui/core/";

const navigationLinks = [
    {id: 0, name: "portfolio", href: "#/projects"},
    {id: 1, name: "contact", href: "/"},
];

const useStyles = makeStyles((theme) => ({
    link: {
        marginRight: 30,
        "&:hover": {
            color: '#f50057'
        },
    }
}));

const NavBar = () => {
    const styles = useStyles();
    const trigger = useScrollTrigger();

    return (
        <Slide in={!trigger}>
            <AppBar position="sticky" color="default">
                <Container maxWidth="md">
                    <Toolbar disableGutters>
                        {navigationLinks.map((item) => (
                            <Link
                                className={styles.link}
                                color="textPrimary"
                                variant="button"
                                underline="none"
                                href={item.href}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </Toolbar>
                </Container>
            </AppBar>
        </Slide>
    );
}

export default NavBar;