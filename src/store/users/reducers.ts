import { createSlice } from "@reduxjs/toolkit";

import { fetchUser } from "./actions";

import { UserEntity } from "../../interfaces/UserEntity";
import { ErrorEntity } from "../../interfaces/ErrorEntity";

export interface UsersStore {
  data: UserEntity[];
  loading: boolean;
  error: ErrorEntity;
}

const initialState: UsersStore = {
  data: [],
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.data = payload;
    });
    builder.addCase(fetchUser.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default userSlice.reducer;
