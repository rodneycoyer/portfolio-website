import React from "react";
import Seo from "../components/SeoComponent";
import NavBar from "../components/NavBarComponent";
import Footer from "../components/FooterComponent";
import Layout from "../components/LayoutComponent";
import { Container, CssBaseline } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/styles";
import ProjectDirectory from "../components/ProjectComponent";

const ProjectsPage = () => {
    return (
  <Layout>
    <Container maxWidth="lg">
        <h1>Project Cards will go here</h1>
    </Container>
  </Layout>
    );
}

export default ProjectsPage;