exports.rewardsQuery = {
  rewards: (parent, args, context) => context.models.Rewards.getAll({}),
  rewardById: (parent, { id }, context) => {
    return context.models.Rewards.getById(id);
  },
};

exports.rewardsMutations = {
  createReward: async (parent, { input }, context) => {
    const createReward = await context.models.Rewards.create(input);
    return createReward;
  },
  updateReward: async (parent, { id, input }, context) => {
    const updateReward = await context.models.Rewards.findAndUpdate(id, input);
    return updateReward;
  },
};
