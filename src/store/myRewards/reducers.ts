import { createSlice } from "@reduxjs/toolkit";

import { ErrorEntity } from "../../interfaces/ErrorEntity";
import { RewardEntity } from "../../interfaces/RewardEntity";

import { fetchRewardsByUser } from "./actions";

export interface MyRewardsStore {
  data: RewardEntity[];
  loading: boolean;
  error: ErrorEntity;
}

const initialState: MyRewardsStore = {
  data: [],
  loading: true,
  error: null,
};

const myRewardsSlice = createSlice({
  name: "rewards",
  initialState,
  reducers: {
    createMyReward: (state: MyRewardsStore, action: { payload: RewardEntity }) => {
      state.data = [...state.data, action.payload];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRewardsByUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchRewardsByUser.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.data = payload;
    });
    builder.addCase(fetchRewardsByUser.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { createMyReward } = myRewardsSlice.actions;

export default myRewardsSlice.reducer;
