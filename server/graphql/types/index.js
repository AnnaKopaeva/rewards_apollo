const rewardFields = `
  message: String,
  rewardCount: Int,
  rewardCurrency: String,
  createAt: String,
`;

exports.rewardTypes = `
  type Reward {
    _id: ID,
    ${rewardFields}
  }
  
  input RewardInput {
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
  
  input SignUpInput {
    avatar: String
    username: String!
    name: String
    email: String!
    password: String!
    passwordConfirmation: String!
  }
`;
