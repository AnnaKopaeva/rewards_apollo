import { createAsyncThunk } from "@reduxjs/toolkit";

import callAPI from "../../helpers/callAPI";
import config from "../../config";

import { UserEntity } from "../../interfaces/UserEntity";

export const fetchUser = createAsyncThunk<UserEntity[]>("users/fetch", async () => {
  const response = await callAPI({ url: config.baseApiUrl });
  return response.data;
});
