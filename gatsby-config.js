module.exports = {
  siteMetadata: {
    title: "Rodney Coyer | Portfolio",
    description: "Portfolio Website",
    siteUrl: "https://www.rodneycoyer.com",
    author: "Rodney Coyer"
  },
  flags: {
    FAST_DEV: true,
    DEV_SSR: true,
    PARALLEL_SOURCING: true,
  },
  plugins: [
    `gatsby-plugin-top-layout`,
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-mui-emotion',
    `gatsby-plugin-netlify`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-mdx`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        root: __dirname,
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 500,
            },
          },
        ],
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects-images`,
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
    }
  ],
};
