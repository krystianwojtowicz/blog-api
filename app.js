var createError = require("http-errors");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const cors = require("cors");
const User = require("./models/user");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

// Set up mongoose
const mongoose = require("mongoose");
const mongoDB =
  "mongodb+srv://m0001-student:Komputer8@cluster0.sskqvig.mongodb.net/?retryWrites=true&w=majority";
// const mongoDB = process.env.MONGO;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error"));
// const func = async () => {
//   const data = await User.find();
//   console.warn(data);
// };
// func();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));

// app.use("/", indexRouter);
app.use("/users", usersRouter);
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
// });

// app.get("/", (req, res) => {
//   res.send("app is working...");
//   // res.json({ users: ["user1", "user2", "user3", "user4"] });
// });

app.use(express.static(path.resolve(__dirname, "./client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

app.post("/signup", async (req, res, next) => {
  try {
    let user = new User(req.body);
    const saveUser = await user.save();
    if (saveUser) {
      return res.status(201).json({
        message: "User created",
        user,
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
});

app.post("/login", async (req, res) => {
  if (req.body.password) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      res.send(user);
    } else {
      res.send({ result: "no user found" });
    }
  } else {
    res.send({ result: "no user found" });
  }
});

// const createToken = (id) => {
//   return jwt.sign({id}, 'secretkey', {})
// }

// app.post("/signup", verifyToken, (req, res, next) => {
//   jwt.verify(req.token, "secretkey", async (err, authData) => {
//     if (err) {
//       res.sendStatus(403);
//     } else {
//       try {
//         let user = new User(req.body);
//         const saveUser = await user.save();
//         if (saveUser) {
//           return res.status(201).json({
//             message: "User created",
//             authData,
//           });
//         }
//         return res.status(500).json({
//           error: "Error. Try again later",
//         });
//       } catch (err) {
//         return res.status(500).json({
//           error: err.message,
//         });
//       }
//     }
//   });
// });

// app.post("/login", (req, res) => {
//   // mock user
//   const user = {
//     username: "brad",
//     password: "brad",
//   };
//   jwt.sign({ user }, "secrekey", (err, token) => {
//     res.json({
//       token,
//     });
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
