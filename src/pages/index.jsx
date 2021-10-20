import React from "react";
import Layout from "../components/LayoutComponent";
import Skills from "../components/SkillsComponent"
import Seo from "../components/SeoComponent";
import Hero from "../components/HeroComponent";

const IndexPage = () => (
  <Layout>
    <Seo
      title="Home"
      keywords={[`gatsby`, `react`, `material-ui`, `graphql`, `portfolio`]}
    />
    <Hero />
    <Skills />
  </Layout>
)

export default IndexPage;