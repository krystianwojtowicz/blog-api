const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

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
    const salt = await bcrypt.genSalt(Number(10));
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    let user = new User({ ...req.body, password: hashPassword });
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
  const user = await User.findOne({ username: req.body.username });
  if (!user) return res.send({ message: "No user found" });
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (validPassword) {
    jwt.sign({ user }, "secretkey", { expiresIn: "2h" }, (err, token) => {
      if (err) {
        res.send("something went wrong");
      }
      res.send({
        user,
        auth: token,
      });
    });
  }
};
