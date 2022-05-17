const { gql } = require("apollo-server-express");

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Url {
    slug: String
    originalUrl: String
    shortUrl: String
  }

  #queries
  type Query {
    getAllUrl: [Url!]!
    getSingleUrl(slug: String): Url! #get a single url by the slug
  }

  type Mutation {
    createNewShortLink(originalUrl: String!): Url!
  }
`;

module.exports = { typeDefs };
