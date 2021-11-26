const mongoose = require("mongoose");
const { ApolloServer, gql } = require("apollo-server-express");

const { rewardTypes, userTypes } = require("./types");
const { rewardsQuery, rewardsMutations, userMutations } = require("./resolvers");
const { buildAuthContext } = require("./context");
const { ApolloServerPluginLandingPageGraphQLPlayground } = require("apollo-server-core");

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
      signIn(input: SignInInput): User
      signOut: Boolean
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
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground({})],
    context: ({ req }) => ({
      ...buildAuthContext(req),
      models: {
        User: new User(mongoose.model("User")),
        Rewards: new Rewards(mongoose.model("Rewards")),
      },
    }),
  });

  return apolloServer;
};
