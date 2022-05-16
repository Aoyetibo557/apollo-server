const { gql } = require("apollo-server");

// Construct a schema, using GraphQL schema language
const typeDefs = gql`

  type ShortLink {
    url: String!
    slug: String! 
  }
  
  type Url {
    originalUrl: String!
    shortUrl: [ShortLink!]
  }
  
  type Query {
    urls: [Url!]
  }
  
  type Mutation {
    createNewShortLink(long-url: String!): Link!
  }
`;

module.exports = typeDefs;
