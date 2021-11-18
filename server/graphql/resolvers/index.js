const data = require("../../fakeDb/data");

exports.rewardsQuery = {
  rewards: (parent, args, context) => {
    return data.rewards;
  },
  myRewards: (parent, args, context) => {
    const mockedId = 1;
    return data.rewards.filter((r) => r._id === mockedId);
  },
};

exports.rewardsMutations = {
  hello: (parent, args, context) => {
    return "Hello";
  },
};
