const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const {isEmail} = require('validator')


const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "please provide an email Address"],
      unique: true,
      validate: [isEmail, 'please provide a valid Email Address'],
    },
    username: {
      type: String,
      required: [true, "please provide a username"],
      unique: true,
      minLength: [5, "minimum username is 5"],
      maxLength: [15, "maximum username is 15"],
    },
    password: {
      type: String,
      required: [true, "please provide a password"],
      minLength: [7, "minimu password is 7"],
    },
    profilepic: {
      type: String,
      required: true,
      default:
        "https://ps.w.org/one-user-avatar/assets/icon-256x256.png?rev=2536829",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);
