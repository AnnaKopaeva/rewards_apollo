import { combineReducers } from "@reduxjs/toolkit";

import profileReducer, { ProfileStore } from "./profile/reducers";
import usersReducer, { UsersStore } from "./users/reducers";

export interface AppState {
  profile: ProfileStore;
  users: UsersStore;
}

const reducer = combineReducers<AppState>({
  profile: profileReducer,
  users: usersReducer,
});

export default reducer;
