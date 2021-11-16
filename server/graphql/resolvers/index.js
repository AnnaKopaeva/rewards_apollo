const rewards = require("../../fakeDb/data")

exports.rewardsQuery = {
  rewards: (parent, args, context) => {
    return rewards;
  }
}

exports.rewardsMutations = {
  hello: (parent, args, context) => {
    return "Hello";
  }
}