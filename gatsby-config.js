// In your gatsby-config.js
module.exports = {
  plugins: [
    // Simple config, passing URL
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "BLOG",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "blog",
        // Url to query from
        url: "https://murmuring-sea-67492.herokuapp.com/",
      },
    },
  ],
}
