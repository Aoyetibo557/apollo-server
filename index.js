const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schemas/TypeDefs");
const { resolvers } = require("./resolvers/Resolvers");
const { models } = require("./models/linkmodel");
const cors = require("cors");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  context: { models },
  cors: {
    origin: "*",
    credentials: true
  }
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
