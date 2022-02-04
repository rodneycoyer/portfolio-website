import * as React from "react";
import PropTypes from 'prop-types';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from "../../src/theme";
import NavBar from "../../src/components/NavBarComponent";
import Footer from "../../src/components/FooterComponent";

export default function TopLayout(props) {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              <NavBar />
                {props.children}
              <Footer />
      </ThemeProvider>
    </React.Fragment>
  );
}

TopLayout.propTypes = {
  children: PropTypes.node,
};