const { gql } = require("apollo-server-express");

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type ShortLink {
    url: String!
    slug: String!
  }

  type Url {
    originalUrl: String
    shortUrl: String
  }

  #queries
  type Query {
    getAllUrl: [Url!]!
    # getSingleUrl(originalUrl: String!): Url!
  }

  type Mutation {
    createNewShortLink(originalUrl: String!): Url!
  }
`;

module.exports = { typeDefs };
