const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, minlength: 3, maxlength: 20, required: true },
  password: { type: String, minlength: 6, required: true },
});

module.exports = mongoose.model("User", UserSchema);
