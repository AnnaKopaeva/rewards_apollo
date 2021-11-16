const userFields = `
  name: String,
  username: String,
  email: String,
`

const rewardFields = `
  time: String,
  message: String,
  rewardCount: String,
  rewardCurrency: String,
`
// user: Partial<UserEntity>;
// userBy: Partial<UserEntity>;

exports.rewardTypes = `
  type Reward {
    _id: ID,
    ${rewardFields}
  }
`