import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Slide from "@mui/material/Slide";
import Toolbar from "@mui/material/Toolbar";
import useScrollTrigger from "@mui/material/useScrollTrigger";

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