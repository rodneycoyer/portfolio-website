import * as React from "react";
import { Link } from "gatsby";
import FilterHdrOutlinedIcon from "@mui/icons-material/FilterHdrOutlined";

import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton"
import Slide from "@mui/material/Slide";
import Toolbar from "@mui/material/Toolbar";
import useScrollTrigger from "@mui/material/useScrollTrigger";

import NavBarModal from "./NavBarModalComponent";
import { Typography } from "@mui/material";

const NavBar = () => {
    const trigger = useScrollTrigger();

    return (
        <Slide in={!trigger}>
            <AppBar position="sticky" color="default">
                <Container maxWidth="md">
                    <Toolbar disableGutters>
                        <Link
                            to="/"
                            variant="button"
                        >
                            <IconButton color="primary">
                                <FilterHdrOutlinedIcon fontSize="large"/>
                            </IconButton>
                        </Link>
                            <Typography disableGutters variant="button" pt={1}> Rod Coyer </Typography>
                        <NavBarModal />
                    </Toolbar>
                </Container>
            </AppBar>
        </Slide>
    );
}

export default NavBar;