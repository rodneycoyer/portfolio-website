import * as React from "react";
import { StaticQuery, graphql } from "gatsby";

import ThemeTopLayout from "gatsby-theme-material-ui-top-layout/src/components/top-layout";
import theme from "../theme";
import NavBar from "../../components/NavBarComponent";
import Footer from "../../components/FooterComponent";


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
            <ThemeTopLayout theme={theme}>
                <NavBar />
                    {children}
                <Footer />
            </ThemeTopLayout>
        )}
    />
)

export default TopLayout;