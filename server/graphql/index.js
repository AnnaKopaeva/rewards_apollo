const mongoose = require("mongoose");
const { ApolloServer, gql } = require("apollo-server-express");

const { rewardTypes, userTypes } = require("./types");
const { rewardsQuery, rewardsMutations, userMutations } = require("./resolvers");

// Graph Models
const Rewards = require("./models/rewards");
const User = require("./models/user");

exports.createApolloServer = () => {
  const typeDefs = gql`
    ${rewardTypes}
    ${userTypes}

    type Query {
      rewards: [Reward]
      rewardById(id: String): Reward
    }

    type Mutation {
      createReward(input: RewardInput): Reward
      updateReward(id: String, input: RewardInput): Reward

      signUp(input: SignUpInput): String
      signIn: String
      signOut: String
    }
  `;

  const resolvers = {
    Query: {
      ...rewardsQuery,
    },
    Mutation: {
      ...rewardsMutations,
      ...userMutations,
    },
  };

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({
      models: {
        User: new User(mongoose.model("User")),
        Rewards: new Rewards(mongoose.model("Rewards")),
      },
    }),
  });

  return apolloServer;
};
