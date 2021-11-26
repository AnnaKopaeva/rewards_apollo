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

exports.userMutations = {
  signUp: async (parent, { input }, ctx) => {
    const registeredUser = await ctx.models.User.signUp(input);
    return registeredUser._id;
  },
  signIn: (parent, { input }, ctx) => {
    return ctx.models.User.signIn(input, ctx);
  },
  signOut: (parent, args, ctx) => {
    return ctx.models.User.signOut(ctx);
  },
};
