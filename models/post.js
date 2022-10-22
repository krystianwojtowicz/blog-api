const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, ref: "User" },
  comments: { type: Array, default: [] },
});

module.exports = mongoose.model("Post", PostSchema);
