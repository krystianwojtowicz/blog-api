// var express = require("express");
// var router = express.Router();
// const postController = require("../controllers/postController");

// /* GET users listing. */
// router.get("/", function (req, res, next) {
//   res.send("respond with a resource");
// });

// // router.post("/signup", userController.signup_post);

// module.exports = router;

const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");
const verifyToken = require("../config/verifyToken");

// GET all posts
router.get("/", postController.posts);
// GET single post
router.get("/:id", postController.post_detail);
//  create post
router.post("/create-post", verifyToken, postController.create_post);
// delete post
router.delete("/:id", postController.delete_post);
// update post
router.put("/:id", postController.update_post);

module.exports = router;

// iwtotb
// const Post = require("../models/post");
// var express = require("express");
// var router = express.Router();
// const postController = require("../controllers/postController");

// /* GET posts listing. */
// router.get("/", async (req, res, next) => {
//   const posts = await Post.find();
//   if (posts.length > 0) {
//     res.send(posts);
//     // return res.json(posts);
//   } else {
//     res.send({ result: "No Post found" });
//   }
// });

// // router.post("/signup", userController.signup_post);

// module.exports = router;
