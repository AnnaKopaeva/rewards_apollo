const mongoose = require("mongoose");
const { ApolloServer, gql } = require("apollo-server-express");

const { rewardTypes } = require("./types");
const { rewardsQuery, rewardsMutations } = require("./resolvers");

// Graph Models
const Rewards = require("./models/rewards");
const User = require("./models/user");

exports.createApolloServer = () => {
  const typeDefs = gql`
    ${rewardTypes}

    type Query {
      rewards: [Reward]
      rewardById(id: String): Reward
    }

    type Mutation {
      createReward(input: RewardInput): Reward
      updateReward(id: String, input: RewardInput): Reward
    }
  `;

  const resolvers = {
    Query: {
      ...rewardsQuery,
    },
    Mutation: {
      ...rewardsMutations,
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
