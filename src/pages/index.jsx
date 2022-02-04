import React from "react";
import Seo from "../components/SeoComponent";
import Hero from "../components/HeroComponent";
import TopLayout from "../../plugins/gatsby-plugin-top-layout/TopLayoutComponent";

const IndexPage = (props) => (
  <TopLayout {...props}>
    <Seo
      title="Home"
      keywords={[`gatsby`, `react`, `material-ui`, `graphql`, `portfolio`, `javascript`, `Home`]}
    />
    <Hero />
  </TopLayout>
)

export default IndexPage;