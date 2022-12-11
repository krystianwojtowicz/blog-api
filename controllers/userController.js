const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { body, validationResult } = require("express-validator");

exports.signup = [
  body("username")
    .trim()
    .isLength({ min: 3 })
    .escape()
    .withMessage("Username must be at least 3 characters long. "),
  body("password")
    .trim()
    .isLength({ min: 6 })
    .escape()
    .withMessage("Password must be at least 6 characters long. "),
  body("confirmPassword")
    .trim()
    .escape()
    .custom(async (value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Confirmed password must be the same as password. ");
      }
    }),

  async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.json({
          error: errors.array().map((error) => error.msg),
        });
      }
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
  },
];

exports.login = async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  if (!user) return res.send({ message: "No user found" });
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (validPassword) {
    jwt.sign({ user }, "secretkey", { expiresIn: "2h" }, (err, token) => {
      if (err) {
        res.send("something went wrong");
      }
      // return res.status(201).json({
      //   user,
      //   auth: token,
      res.send({
        user,
        auth: token,
      });
    });
  }
};
