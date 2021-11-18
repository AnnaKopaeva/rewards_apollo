const { ApolloServer, gql } = require("apollo-server-express");

const { rewardTypes } = require("./types");
const { rewardsQuery, rewardsMutations } = require("./resolvers");

exports.createApolloServer = () => {
  const typeDefs = gql`
    ${rewardTypes}

    type Query {
      rewards: [Reward]
      myRewards: [Reward]
    }

    type Mutation {
      hello: String
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
  });

  return apolloServer;
};
