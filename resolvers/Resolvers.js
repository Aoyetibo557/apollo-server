const { urls } = require("../FakeData");

const resolvers = {
  Query: {
    getAllUrl: () => urls
  },
  Mutation: {
    createNewShortLink: (parent, args) => {
      try {
        const inputLink = args.originalUrl;
        const slug = Math.random().toString(36).substr(2, 4);
        urls.push({
          originalUrl: inputLink || "OriginalInput",
          shortUrl: "https://rebrandly.com/" + slug
        });
        return urls;
      } catch (err) {
        console.log(err);
      }
    }
  }
};

module.exports = { resolvers };
