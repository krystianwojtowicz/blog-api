const Post = require("../models/post");

/* GET posts listing. */
exports.posts = function (req, res, next) {
  Post.find().exec((err, posts) => {
    if (err) return res.json(err);

    return res.json(posts);
  });
};

// Display detail page for a specific post.
exports.post_detail = (req, res, next) => {
  Post.findById(req.params.id).exec((err, item) => {
    if (err) return next(err);
    if (!item)
      return res.status(404).json({
        message: "Article not found",
      });

    //   async.parallel(
    //     {
    //       genre(callback) {
    //         Genre.findById(req.params.id).exec(callback);
    //       },

    //       genre_books(callback) {
    //         Book.find({ genre: req.params.id }).exec(callback);
    //       },
    //     },
    //     (err, results) => {
    //       if (err) {
    //         return next(err);
    //       }
    //       if (results.genre == null) {
    //         // No results.
    //         const err = new Error("Genre not found");
    //         err.status = 404;
    //         return next(err);
    //       }
    // Successful, so render
    return res.json(post);
    //   res.render("genre_detail", {
    //     title: "Genre Detail",
    //     genre: results.genre,
    //     genre_books: results.genre_books,
    //   });
  });
};
