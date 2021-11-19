import { useMutation } from "@apollo/client";
import { GET_REWARDS, CREATE_REWARD } from "../queries";
import { RewardEntity } from "../../interfaces/RewardEntity";

export const useCreateReward = () =>
  useMutation<{ createReward: RewardEntity }, RewardEntity>(CREATE_REWARD, {
    update(cache, { data: { createReward } }) {
      const { rewards } = cache.readQuery({ query: GET_REWARDS });
      cache.writeQuery({ query: GET_REWARDS, data: { rewards: [...rewards, createReward] } });
    },
  });
