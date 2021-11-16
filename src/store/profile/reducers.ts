import { createSlice } from "@reduxjs/toolkit";

import { fetchUser } from "../users/actions";

import { UserEntity } from "../../interfaces/UserEntity";
import { ErrorEntity } from "../../interfaces/ErrorEntity";

export interface ProfileStore {
  data: UserEntity;
  isLoaded: boolean;
  error: ErrorEntity;
}

const initialState: ProfileStore = {
  data: null,
  isLoaded: false,
  error: null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.isLoaded = false;
    });
    builder.addCase(fetchUser.fulfilled, (state, { payload }) => {
      state.isLoaded = true;
      state.data = payload.length ? payload[0] : null;
    });
    builder.addCase(fetchUser.rejected, (state, { payload }) => {
      state.error = payload;
    });
  },
});

export default profileSlice.reducer;
