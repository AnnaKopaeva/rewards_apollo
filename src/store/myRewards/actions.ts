import { createAsyncThunk } from "@reduxjs/toolkit";
import { RewardEntity } from "../../interfaces/RewardEntity";

import myRewards from "../../mockedData/myRewards";

const FETCH_REWARDS_BY_USER = "rewards/fetchByUser";

export const fetchRewardsByUser = createAsyncThunk<RewardEntity[], number>(
  FETCH_REWARDS_BY_USER,
  (id) => myRewards
);
