var createError = require("http-errors");
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
app.post("/signup", (err, req, res, next) => {
  if (err) {
    next(err); // Pass errors to Express.
  }
  let user = new User(req.body);
  user.save();
});

// for change code
// app.post("/signup", (req, res) => {
//   let user = new User(req.body);
//   user.save();
// });
// for change code

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
