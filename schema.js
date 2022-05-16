const { gql } = require("apollo-server");

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type ShortLink {
    url: String!
    slug: String!
  }

  type Url {
    originalUrl: String
    shortUrl: [ShortLink]
  }

  type Query {
    getAllUrls: [Url]
    getSingleUrl(originalUrl: String!): Url!
  }

  type Mutation {
    createNewShortLink(originalUrl: String!): Url
  }
`;

module.exports = typeDefs;
