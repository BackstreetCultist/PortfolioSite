module.exports = {
  siteMetadata: {
    title: "Portfolio"
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `filesystem`,
        path: `${__dirname}/filesystem`,
      }
    },
    "gatsby-plugin-mdx"
  ],
};
