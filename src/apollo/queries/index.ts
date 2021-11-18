import { gql } from "@apollo/client";

export const GET_REWARDS = gql`
  query Rewards {
    rewards {
      _id
      rewardCount
      rewardCurrency
      time
      message
    }
  }
`;

export const GET_MY_REWARDS = gql`
  query MyRewards {
    myRewards {
      _id
      rewardCount
      rewardCurrency
      time
      message
    }
  }
`;
