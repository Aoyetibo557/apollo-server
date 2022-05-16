const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");

const links = [
  {
    shortUrl: "https://www.sdlfksdfsdf/sdf",
    originalUrl: "https://www.fsdifslkdjflskdjflwelwief/sfsjdkfsjd"
  }
];
// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    urls: () => links
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
