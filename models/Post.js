const { model, Schema } = require("mongoose");

const PostSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  body: {
    type: String,
    required: true,
  },
  createdat: {
    type: Date,
    default: Date.now,
  },
  comments: [
    {
      body: String,
      username: String,
      createdat: String,
    },
  ],
  likes: [
    {
      username: String,
      createdat: String,
    },
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
});

module.exports = model("Post", PostSchema);
