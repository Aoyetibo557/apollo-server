const { link } = require("./models/linkmodel");

const Query = {
  getAllUrl: async () => {
    try {
      const url = await link.findAll();
      return url;
    } catch (err) {
      console.log(err);
    }
  }
};

module.exports = { Query };
