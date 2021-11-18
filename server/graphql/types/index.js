const rewardFields = `
  time: String,
  message: String,
  rewardCount: String,
  rewardCurrency: String,
  startDate: String,
  endDate: String,
`;

exports.rewardTypes = `
  type Reward {
    _id: ID,
    ${rewardFields}
  }
`;

exports.userTypes = `
  type User {
    _id: ID
    avatar: String
    username: String
    name: String
    email: String
    role: String
  }
`;
