const postsResolvers = require("./posts.resolvers");
const usersResolvers = require("./users.resolvers");

module.exports = {
  Query: {
    ...postsResolvers.Query,
  },
};