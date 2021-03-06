module.exports = {
  siteMetadata: {
    title: "Blog & Portfolio",
    subtitle: "Charlie Wilkins, Developer & Quality Engineer"
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `portfolio`,
        path: `${__dirname}/portfolio`,
      }
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-catch-links"
  ],
};
