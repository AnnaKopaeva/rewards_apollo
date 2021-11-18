const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rewardSchema = new Schema({
  rewardCount: { type: String, required: true },
  rewardCurrency: { type: String, required: true },
  message: { type: String, required: true, maxLength: 128 },
  // startDate: { type: Date },
  // endDate: Date,
  user: { type: Schema.Types.ObjectId, ref: "User" },
  // createAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("rewards", rewardSchema);
