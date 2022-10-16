const Post = require("../models/post");
const jwt = require("jsonwebtoken");

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
    // Successful, so render
    return res.json(post);
  });
};

// exports.create_post = (req, res) => {
//     jwt.verify(req.token, "secretkey", async (err, authData) => {
//     try {
//       let post = new Post(req.body);
//       // let post = new Post({
//       //   title: req.body.title,
//       //   content: req.body.content,
//       //   author: req.body.author,
//       //   // author: res.locals.currentUser.username,
//       // });
//       // post.author = res.locals.currentUser;

//       const savePost = await post.save();
//       if (savePost) {
//         return res.status(201).json({
//           message: "Post created",
//           post,
//         });
//       }
//       return res.status(500).json({
//         error: "Error. Try again later",
//       });
//     } catch (err) {
//       return res.status(500).json({
//         error: err.message,
//       });
//     }
//   });
// };

exports.create_post = async (req, res, next) => {
  try {
    let post = new Post(req.body);
    // let post = new Post({
    //   title: req.body.title,
    //   content: req.body.content,
    //   author: req.body.author,
    //   // author: res.locals.currentUser.username,
    // });
    // post.author = res.locals.currentUser;

    const savePost = await post.save();
    if (savePost) {
      return res.status(201).json({
        message: "Post created",
        post,
      });
    }
    return res.status(500).json({
      error: "Error. Try again later",
    });
  } catch (err) {
    return res.status(500).json({
      error: err.message,
    });
  }
};

// exports.create_post = async (req, res, next) => {
//   try {
//     await Post.create(req.body);
//     return res.json({
//       message: "Post created",
//     });
//   } catch (err) {
//     return res.json({
//       error: err.message,
//     });
//   }
// };
