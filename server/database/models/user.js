const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  avatar: String,
  email: {
    type: String,
    required: "Email is required",
    lowercase: true,
    index: true,
    unique: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/],
  },
  name: {
    type: String,
    minLength: [3, "Min name length is 3 characters."],
  },
  username: {
    type: String,
    required: true,
    minLength: [3, "Min username length is 3 characters."],
  },
  password: {
    type: String,
    required: true,
    minLength: [6, "Min username length is 6 characters."],
    maxLength: [32, "Max username length is 32 characters."],
  },
  role: {
    enum: ["quest", "admin"],
    type: String,
    required: true,
    default: "quest",
  },
  info: String,
  creatAt: { type: Date, default: Date.now },
});

userSchema.pre("save", function (next) {
  const user = this;

  bcrypt.genSalt(10, function (err, salt) {
    if (err) {
      return next(err);
    }
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.validatePassword = function (candidatePassword, done) {
  bcrypt.compare(candidatePassword, this.password, function (error, isSuccess) {
    if (error) {
      return done(error);
    }
    return done(null, isSuccess);
  });
};

module.exports = mongoose.model("User", userSchema);
