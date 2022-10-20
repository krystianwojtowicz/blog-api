var createError = require("http-errors");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const cors = require("cors");
const User = require("./models/user");
const Post = require("./models/post");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var postsRouter = require("./routes/posts");

var app = express();

// Set up mongoose
const mongoose = require("mongoose");
const mongoDB =
  "mongodb+srv://m0001-student:Komputer8@cluster0.sskqvig.mongodb.net/?retryWrites=true&w=majority";
// const mongoDB = process.env.MONGO;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error"));

// // view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

// const func = async () => {
//   const data = await Post.find();
//   console.warn(data);
// };
// func();

app.use(logger("dev"));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));

// app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/posts", postsRouter);

// app.get("/posts", async (res, req) => {
//   const posts = await Post.find();
//   if (posts.length > 0) {
//     res.send(posts);
//     // return res.status(201).json({ posts });
//   } else {
//     res.send({ result: "No Post found" });
//   }
// });

app.use(express.static(path.resolve(__dirname, "./client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

// app.post("/signup", async (req, res, next) => {
//   try {
//     // check if username exists
//     const userExists = await User.find({ username: req.body.username });
//     if (userExists.length > 0) {
//       return res.json({
//         error: "Username already exists",
//       });
//     }
//     // creating user
//     let user = new User(req.body);
//     const saveUser = await user.save();
//     if (saveUser) {
//       return res.status(201).json({
//         message: "User created",
//         user,
//       });
//     }
//     return res.status(500).json({
//       error: "Error. Try again later",
//     });
//   } catch (err) {
//     return res.status(500).json({
//       error: err.message,
//     });
//   }
// });

// app.post("/signup", async (req, res, next) => {
//   try {
//     // check if username exists
//     const userExists = await User.find({ username: req.body.username });
//     if (userExists.length > 0) {
//       return res.status(409).json({
//         error: "Username already exists",
//       });
//     }
//     // creating user
//     let user = new User(req.body);
//     const saveUser = await user.save();
//     if (saveUser) {
//       return res.status(201).json({
//         message: "User created",
//         user,
//       });
//     }
//     return res.status(500).json({
//       error: "Error. Try again later",
//     });
//   } catch (err) {
//     return res.status(500).json({
//       error: err.message,
//     });
//   }
// });

// app.post("/login", async (req, res) => {
//   if (req.body.password) {
//     let user = await User.findOne(req.body).select("-password");
//     if (user) {
//       jwt.sign({ user }, "secretkey", { expiresIn: "2h" }, (err, token) => {
//         if (err) {
//           res.send("something went wrong");
//         }
//         res.send({
//           user,
//           auth: token,
//         });
//       });
//     } else {
//       res.send({ result: "no user found" });
//     }
//   } else {
//     res.send({ result: "no user found" });
//   }
// });

// w postman
// app.post("/create-post", verifyToken, (req, res) => {
//   jwt.verify(req.token, "secretkey", async (err, authData) => {
//     if (err) {
//       res.sendStatus(403);
//     } else {
//       let post = new Post(req.body);
//       const savePost = await post.save();
//       res.json({ message: "post created", authData });
//     }
//   });
// });

// app.get("/posts", async (res, req) => {
//   const posts = await Post.find();
//   if (posts.length > 0) {
//     res.send(posts);
//     // return res.json(posts);
//   } else {
//     res.send({ result: "No Post found" });
//   }
//   // try {
//   //   const posts = await Post.find();
//   //   if (posts) {
//   //     return res.status(201).json({
//   //       message: "Post created",
//   //       posts,
//   //     });
//   //   }
//   //   return res.status(500).json({
//   //     error: "Error. Try again later",
//   //   });
//   // } catch (err) {
//   //   return res.status(500).json({
//   //     error: err.message,
//   //   });
//   // }
// });

// // w b
// app.post("/create-post", async (req, res, next) => {
//   try {
//     let post = new Post(req.body);
//     const savePost = await post.save();
//     if (savePost) {
//       return res.status(201).json({
//         message: "Post created",
//         post,
//       });
//     }
//     return res.status(500).json({
//       error: "Error. Try again later",
//     });
//   } catch (err) {
//     return res.status(500).json({
//       error: err.message,
//     });
//   }
// });

// app.post("/create-post", verifyToken, (req, res) => {
//   jwt.verify(req.token, "secretkey", async (err, authData) => {
//     try {
//       let post = new Post(req.body);
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
// });

// function verifyToken(req, res, next) {
//   const bearerHeader = req.headers["authorization"];
//   if (typeof bearerHeader !== "undefined") {
//     const bearer = bearerHeader.split(" ");
//     const bearerToken = bearer[1];
//     req.token = bearerToken;
//     next();
//   } else {
//     res.sendStatus(403);
//   }
// }

// app.use((req, res, next) => {
//   res.locals.currentUser = req.user;
//   next();
// });

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
