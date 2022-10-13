const Post = require("../models/post");

/* GET posts listing. */
exports.posts = function (req, res, next) {
  Post.find().exec((err, posts) => {
    if (err) return res.json(err);

    return res.json(posts);
  });
};
// iwnh
