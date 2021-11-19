import { gql } from "@apollo/client";

export const GET_REWARDS = gql`
  query Rewards {
    rewards {
      _id
      rewardCount
      rewardCurrency
      createAt
      message
    }
  }
`;

export const GET_REWARD_BY_ID = gql`
  query RewardById($id: String) {
    rewardById(id: $id) {
      _id
      rewardCount
      rewardCurrency
      createAt
      message
    }
  }
`;

export const CREATE_REWARD = gql`
  mutation CreateReward($message: String, $rewardCount: Int, $rewardCurrency: String) {
    createReward(
      input: { message: $message, rewardCount: $rewardCount, rewardCurrency: $rewardCurrency }
    ) {
      _id
      rewardCount
      rewardCurrency
      createAt
      message
    }
  }
`;
