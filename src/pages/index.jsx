import * as React from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Hero from "../components/HeroComponent";

const IndexPage = () => {
  const darkTheme = createTheme({
    palette: {
      type: "dark"
    }
});

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Hero />
    </ThemeProvider>
  );
}

export default IndexPage;