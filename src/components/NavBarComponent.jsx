import * as React from "react";
import { Link, IconButton } from "gatsby-theme-material-ui";
import FilterHdrOutlinedIcon from "@mui/icons-material/FilterHdrOutlined";

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
                        <Link
              to="/"
              variant="button"
          >
              <IconButton color="primary">
                <FilterHdrOutlinedIcon fontSize="large"/>
              </IconButton>
          </Link>
                        <NavBarModal />
                    </Toolbar>
                </Container>
            </AppBar>
        </Slide>
    );
}

export default NavBar;