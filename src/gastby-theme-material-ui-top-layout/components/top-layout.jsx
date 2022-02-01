import * as React from "react";
import { StaticQuery, graphql } from "gatsby";

import ThemeTopLayout from "gatsby-theme-material-ui-top-layout/src/components/top-layout";
import NavBar from "../../components/NavBarComponent";
import Footer from "../../components/FooterComponent";

import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
  }
});

const TopLayout = ({ children }) => (
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
                <ThemeTopLayout theme={theme}>
                    <NavBar />
                    <main>{children}</main>
                    <Footer />
                </ThemeTopLayout>
            </React.Fragment>
        )}
    />
)

export default TopLayout;