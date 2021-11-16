import { createSelector } from "reselect";

import { AppState } from "../rootReducer";
import { RewardEntity } from "../../interfaces/RewardEntity";

export const selectMyRewards = (state: AppState) => state.myRewards;

const getTotalSum = (data: RewardEntity[]) =>
  data.reduce((total: number, el) => total + +el.rewardCount, 0);

export const selectMyRewardsData = createSelector(selectMyRewards, (rewards) => rewards.data);
export const selectRewardsLoading = createSelector(selectMyRewards, (rewards) => rewards.loading);
export const selectTotalMyRewards = createSelector(selectMyRewards, (rewards) =>
  getTotalSum(rewards.data)
);
