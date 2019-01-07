module.exports = {
  siteMetadata: {
    title: "1st Workshop on Trust and Privacy Aspects of Smart Information Environments (TPSIE)",
    description: "Call for Paper of the 1st Workshop on Trust and Privacy Aspects of Smart Information Environments (TPSIE)"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: '1st Workshop on Trust and Privacy Aspects of Smart Information Environments (TPSIE)',
        short_name: 'TPSIE Workshop',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.            
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
