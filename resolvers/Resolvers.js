const { urls } = require("../FakeData");

const resolvers = {
  Query: {
    //retrieves all the urls in the array
    getAllUrl: () => urls,

    // This retrieves a single object containing the slug, originalUrl and shortUrl
    // It takes in a unique slug and check if it exits in the database || array
    getSingleUrl: (parent, args) => {
      try {
        const slug = args.slug;
        return urls.filter((url) => url.slug === slug);
      } catch (err) {
        console.log(err);
        return false;
      }
    }
  },

  Mutation: {
    // This checks if the slugor the input link already exists in the array
    // before creating a new one
    createNewShortLink: (parent, args) => {
      try {
        const inputLink = args.originalUrl;
        const slug = Math.random().toString(36).substr(2, 4);
        const found = urls.some(
          (url) => url.slug === slug || url.originalUrl === inputLink
        );
        if (!found) {
          urls.push({
            slug: slug || "my-talk",
            originalUrl: inputLink || "OriginalInput",
            shortUrl: "https://rebrandly.com/" + slug
          });
        }
        return urls;
      } catch (err) {
        console.log(err);
      }
    }
  }
};

module.exports = { resolvers };
