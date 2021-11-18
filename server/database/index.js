const mongoose = require("mongoose");
const config = require("../config/dev");

require("./models/rewards");
require("./models/user");

exports.connect = () => {
  mongoose.connect(config.DB_URI, {}, async () => {
    console.log("Connected to DB");
  });
};
