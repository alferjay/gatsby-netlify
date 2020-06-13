/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Gatsby Bootstrap",
    description: "This is the description of the website",
    keywords: "Gatsby, Bootstrap",
    image: "/static/gatsby.jpg",
    url: "https://alferjay.com",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `localhost/anderson`,
        protocol: `http`,
        hostingWPCOM: false,
      },
    },
    "gatsby-plugin-react-helmet",
  ],
}
