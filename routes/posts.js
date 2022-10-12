// var express = require("express");
// var router = express.Router();
// const postController = require("../controllers/postController");

// /* GET users listing. */
// router.get("/", function (req, res, next) {
//   res.send("respond with a resource");
// });

// // router.post("/signup", userController.signup_post);

// module.exports = router;

const Post = require("../models/post");
var express = require("express");
var router = express.Router();
const postController = require("../controllers/postController");

/* GET posts listing. */
router.get("/", async (req, res, next) => {
  const posts = await Post.find();
  if (posts.length > 0) {
    res.send(posts);
    // return res.json(posts);
  } else {
    res.send({ result: "No Post found" });
  }
});

// router.post("/signup", userController.signup_post);

module.exports = router;
