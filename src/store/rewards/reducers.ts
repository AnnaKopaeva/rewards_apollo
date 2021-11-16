import { createSlice } from "@reduxjs/toolkit";

import { ErrorEntity } from "../../interfaces/ErrorEntity";
import { RewardEntity } from "../../interfaces/RewardEntity";

import { fetchRewards } from "./actions";

export interface RewardsStore {
  data: RewardEntity[];
  loading: boolean;
  error: ErrorEntity;
}

const initialState: RewardsStore = {
  data: [],
  loading: true,
  error: null,
};

const rewardsSlice = createSlice({
  name: "rewards",
  initialState,
  reducers: {
    createReward: (state: RewardsStore, action: { payload: RewardEntity }) => {
      state.data = [...state.data, action.payload];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRewards.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchRewards.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.data = payload;
    });
    builder.addCase(fetchRewards.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { createReward } = rewardsSlice.actions;

export default rewardsSlice.reducer;
