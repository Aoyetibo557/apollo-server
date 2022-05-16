const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const models = require("./models/linkmodel");

const resolver = {
  Query: {
    getAllUrls: async (parent, args, { models }) => {
      try {
        const { originalUrl, shortUrl } = await models.Url.findAll();
        return { originalUrl, shortUrl };
      } catch (err) {
        console.log(err);
      }
    },

    getSingleUrl: async (parent, args, { models }) => {
      try {
        const { originalUrl } = args.originalUrl;
        return originalUrl;
      } catch (err) {
        console.log(err);
      }
    }
  },

  Mutation: {
    createNewShortLink: async (root, args, { models }) => {
      try {
        // const { originalUrl } = args.originalUrl;
        const uniqueSlug = Math.random().toString(36).substr(2, 4); // 4 is the length of the slug
        const newShortUrl = "https://shortbyanu" + uniqueSlug;
        const savedUrl = models.Url.create(args, newShortUrl);
        console.log(savedUrl);
        return savedUrl;
      } catch (err) {
        console.log(err);
      }
    }
  }
};

// module.exports = { Query };

const server = new ApolloServer({
  typeDefs,
  resolver,
  context: { models }
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
