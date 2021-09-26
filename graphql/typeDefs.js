const { gql } = require("apollo-server");

module.exports = gql`
  #   Get single post handler
  type Post {
    id: ID!
    body: String!
    createdat: String!
    username: String!
    comments: [Comment]!
    likes: [Like]!
    likeCount: Int!
    commentCount: Int!
  }

  #   Comments handler
  type Comment {
    id: ID!
    createdat: String!
    username: String!
    body: String!
  }

  #   Like post handler
  type Like {
    id: ID!
    createdat: String!
    username: String!
  }

  #   User handler
  type User {
    id: ID!
    email: String!
    token: String!
    username: String!
    createdat: String!
  }

  #   Register input handler
  input RegisterInput {
    username: String!
    email: String!
    password: String!
    confirmPassword: String!
  }

  #   Query to get post from DB
  type Query {
    getPosts: [Post]
    getPost(postId: ID!): Post
  }

  #   Various operations that can be performed
  type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
    createPost(body: String!): Post!
    deletePost(postId: ID!): String!
    createComment(postId: ID!, body: String!): Post!
    deleteComment(postId: ID!, commentId: ID!): Post!
    likePost(postId: ID!): Post!
  }

  #   Alert subscribed users of new post
  #   type Subscription {
  #       newPost: Post!
  #   }
`;
