import React from "react";
import Layout from "../components/LayoutComponent";
import Skills from "../components/SkillsComponent"
import Seo from "../components/SeoComponent";

const IndexPage = () => (
  <Layout>
    <Seo
      title="Home"
      keywords={[`gatsby`, `react`, `material-ui`, `graphql`, `portfolio`]}
    />
    <Skills />
  </Layout>
)

export default IndexPage;