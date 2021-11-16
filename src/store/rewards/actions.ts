import { createAsyncThunk } from "@reduxjs/toolkit";
import { RewardEntity } from "../../interfaces/RewardEntity";

import rewards from "../../mockedData/rewards";

const FETCH_REWARDS = "rewards/fetch";

export const fetchRewards = createAsyncThunk<RewardEntity[]>(FETCH_REWARDS, () => rewards);
