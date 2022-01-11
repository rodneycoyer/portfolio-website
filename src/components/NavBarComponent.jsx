import React from "react";
import {
    AppBar, Container,
    Slide, Toolbar, useScrollTrigger
} from "@material-ui/core/";
import NavBarModal from "./NavBarModalComponent";

const NavBar = () => {
    const trigger = useScrollTrigger();

    return (
        <Slide in={!trigger}>
            <AppBar position="sticky" color="default">
                <Container maxWidth="md">
                    <Toolbar disableGutters>
                        <NavBarModal />
                    </Toolbar>
                </Container>
            </AppBar>
        </Slide>
    );
}

export default NavBar;