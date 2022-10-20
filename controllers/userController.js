const User = require("../models/user");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res, next) => {
  try {
    // check if username exists
    const userExists = await User.find({ username: req.body.username });
    if (userExists.length > 0) {
      return res.json({
        error: "Username already exists",
      });
    }
    // creating user
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
};

exports.login = async (req, res) => {
  if (req.body.password) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      jwt.sign({ user }, "secretkey", { expiresIn: "2h" }, (err, token) => {
        if (err) {
          res.send("something went wrong");
        }
        res.send({
          user,
          auth: token,
        });
      });
    } else {
      res.send({ result: "no user found" });
    }
  } else {
    res.send({ result: "no user found" });
  }
};
