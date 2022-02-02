import * as React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { Provider } from "react-redux";
import createStore from "../../state/createStore";

import ThemeTopLayout from "gatsby-theme-material-ui-top-layout/src/components/top-layout";
import theme from "../theme";
import NavBar from "../../components/NavBarComponent";
import Footer from "../../components/FooterComponent";

const store = createStore();

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
            <Provider store={store}>
                <ThemeTopLayout theme={theme}>
                    <NavBar />
                        {children}
                    <Footer />
                </ThemeTopLayout>
            </Provider>
        )}
    />
)

TopLayout.propTypes = {
    children: PropTypes.node,
};

export default TopLayout;