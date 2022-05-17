const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schemas/TypeDefs");
const { resolvers } = require("./resolvers/Resolvers");
const { models } = require("./models/linkmodel");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { models }
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
