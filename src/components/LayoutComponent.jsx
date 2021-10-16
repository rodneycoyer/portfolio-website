import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline, Container } from "@material-ui/core";
import Hero from "./HeroComponent";
import NavBar from "./NavBarComponent";
import Footer from "./FooterComponent";

const darkTheme = createTheme({
    palette: {
        type: "dark"
    }
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
                    <CssBaseline />
                    <NavBar />
                    <Hero />
                    <Container maxWidth="lg" style={{backgroundColor:"light-black"}}>
                        <main>{children}</main>
                    </Container>
                    <Footer />
                </ThemeProvider>
            </React.Fragment>
        )}
    />
)

export default Layout;