// const Post = require("../models/post");

// // get all posts
// exports.posts = function (req, res) {
//   Post.find()
//     .sort([["timestamp", "descending"]])
//     .populate("author")
//     .exec((err, posts) => {
//       if (err) return res.json(err);

//       return res.json(posts);
//     });
// };
