const { AuthenticationError, UserInputError } = require("apollo-server");

const Post = require("../../models/Post");
const { authCheck } = require("../../utils/validators");

module.exports = {
  Query: {
    // Get all posts from DB
    async getPosts() {
      try {
        let posts = await Post.find().sort({ createdat: -1 });
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

  //    Post Mutations starts here
  Mutation: {
    //	Create post mutation
    async createPost(_, { body }, context) {
      const user = authCheck(context);

      if (body.trim() === "") {
        throw new Error("Post body must not be empty.");
      }

      const newPost = new Post({
        body,
        user: user.id,
        username: user.username,
        createdat: new Date().toISOString(),
      });
      const post = await newPost.save();

      return post;
    },

    //	Delete post mutation
    async deletePost(_, { postId }, context) {
      const user = authCheck(context);
      try {
        const post = await Post.findById(postId);
        if (user.id === post.user.toString()) {
          await post.delete();
          return "Post successfully deleted.";
        } else {
          throw new AuthenticationError("Operation not permitted.");
        }
      } catch (err) {
        throw new Error(err);
      }
    },

    // Create comments mutation using arrow function
    createComment: async (_, { postId, body }, context) => {
      //  the below username was destructured from user
      const { username } = authCheck(context);
      if (body.trim() === "") {
        throw new UserInputError("Empty comment", {
          errors: {
            body: "Comment must not be empty",
          },
        });
      }
      const post = await Post.findById(postId);
      if (post) {
        //  unshift() method add the latest to the top in DB
        post.comments.unshift({
          body,
          username,
          createdat: new Date().toISOString(),
        });
        await post.save();
        return post;
      } else {
        throw new UserInputError("Post not found");
      }
    },

    //  Delete comments mutation using arrow function
    deleteComment: async (_, { postId, commentId }, context) => {
      //  the below username was destructured from user
      const { username } = authCheck(context);
      const post = await Post.findById(postId);
      if (post) {
        // We find the index of the comments in the array of comments
        const commentIndex = post.comments.findIndex(
          (comment) => comment.id === commentId
        );

        if (post.comments[commentIndex].username === username) {
          post.comments.splice(commentIndex, 1);
          await post.save();
          return post;
        } else {
          throw new AuthenticationError("Action not permitted");
        }
      } else {
        throw new UserInputError("Post not found");
      }
    },

    //  Like and unlike post mutation
    likePost: async (_, { postId }, context) => {
      //  the below username was destructured from user
      const { username } = authCheck(context);
      const post = await Post.findById(postId);

      if (post) {
        if (post.likes.find((like) => like.username === username)) {
          //  Post already liked, unlike it
          post.likes = post.likes.filter((like) => like.username !== username);
        } else {
          //  Post not liked, like post
          post.likes.push({
            username,
            createdat: new Date().toISOString(),
          });
        }
        await post.save();
        return post;
      } else {
        throw new UserInputError("Post not found.");
      }
    },
  },

  //   Subscription handler starts
  // Subscription: {
  //     newPost: {

  //     }
  // }
};
