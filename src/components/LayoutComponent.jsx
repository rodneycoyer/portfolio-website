import * as React from "react";
import { StaticQuery, graphql } from "gatsby";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline"

import NavBar from "./NavBarComponent";
import Footer from "./FooterComponent";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const Layout = ({children}) => (
    <StaticQuery
        query={graphql`
        query SiteTitleQuery {
            site {
            siteMetadata {
                title
                description
            }
            }
        }
        `}
        render={data => (
            <React.Fragment>
                <ThemeProvider theme={darkTheme}>
                    <CssBaseline enableColorScheme />
                    <NavBar />
                        <main>{children}</main>
                        <Footer />
                </ThemeProvider>
            </React.Fragment>
        )}
    />
)

export default Layout;