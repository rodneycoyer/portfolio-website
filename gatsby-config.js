module.exports = {
  plugins: [
    `gatsby-theme-material-ui`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/projects`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rodney Coyer | Portfolio`,
        short_name: `rodneycoyer-portfolio`,
        start_url: `/home`,
        background_color: `#20232a`,
        theme_color: `#20232a`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`
      },
    },
  ],
  siteMetadata: {
    title: "Rodney Coyer | Portfolio",
    description: "Portfolio Website",
    siteUrl: "https://www.rodneycoyer.com",
    author: "Rodney Coyer"
  },
};
