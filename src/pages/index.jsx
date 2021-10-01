import * as React from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Hero from "../components/HeroComponent";
import NavBar from "../components/NavBarComponent";
import AboutPage from "../components/AboutComponent";
import ResumePage from "../components/ResumeComponent";
import ProjectPage from "../components/ProjectComponent";
import Footer from "../components/FooterComponent";

const IndexPage = () => {
  const darkTheme = createTheme({
    palette: {
      type: "dark"
    }
});

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <NavBar />
      <Hero />
      <AboutPage />
      <ResumePage />
      <ProjectPage />
      <Footer />
    </ThemeProvider>
  );
}

export default IndexPage;