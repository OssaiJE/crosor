const postsResolvers = require("./posts.resolvers");
const usersResolvers = require("./users.resolvers");

module.exports = {
  // Post modifier to return any modification (likes, comments ...)
  Post: {
    likeCount: (parent) => parent.likes.length,
    commentCount: (parent) => parent.comments.length,
  },

  // Get all posts query handler
  Query: {
    ...postsResolvers.Query,
  },

  //   Mutation handler
  Mutation: {
    ...usersResolvers.Mutation,
    ...postsResolvers.Mutation,
  },
};
