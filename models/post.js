const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, ref: "User" },
    date: { type: Date, default: new Date() },
    // author: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    comments: { type: Array, default: [] },
    // published: { type: Boolean },
    // timestamp: { type: Date },
    // imgUrl: { type: String },
    // likes: { type: Array, default: [] },
  }
  // { typeKey: "$type" }
);

module.exports = mongoose.model("Post", PostSchema);
