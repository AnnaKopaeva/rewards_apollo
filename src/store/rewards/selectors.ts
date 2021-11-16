import { createSelector } from "reselect";

import { selectProfileData } from "../profile/selectors";
import { AppState } from "../rootReducer";
import { UserEntity } from "../../interfaces/UserEntity";
import { RewardEntity } from "../../interfaces/RewardEntity";
import { RewardsStore } from "./reducers";

export const selectRewards = (state: AppState) => state.rewards;

const getTotalSum = (data: RewardEntity[]) =>
  data.reduce((total: number, el) => total + +el.rewardCount, 0);

export const selectAllRewards = createSelector(selectRewards, (rewards) => rewards.data);
export const selectRewardsLoading = createSelector(selectRewards, (rewards) => rewards.loading);
export const selectTotalGiveRewards = createSelector(
  selectRewards,
  selectProfileData,
  (rewards: RewardsStore, profile: UserEntity) => {
    const giveRewards = rewards.data.filter((el: RewardEntity) => el.userBy.id === profile.id);
    return getTotalSum(giveRewards);
  }
);
