const Post = require("../../models/Post");
const { auth, authCheck } = require("../../utils/validators");

module.exports = {
  Query: {
    // Get all posts from DB
    async getPosts() {
      try {
        let posts = await Post.find();
        return posts;
      } catch (err) {
        throw new Error(err);
      }
    },
    // Get single post from DB
    async getPost(_, { postId }) {
      try {
        const post = await Post.findById(postId);
        if (post) {
          return post;
        } else {
          throw new Error("Post not found");
        }
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  Mutation: {
    async createPost(_, { body }, context) {
      const user = authCheck(context);

      // console.log(user);

      const newPost = new Post({
        body,
        user: user.id,
        username: user.username,
        createdat: new Date().toISOString(),
      });
      const post = await newPost.save();

      return post;
    },
  },
};
