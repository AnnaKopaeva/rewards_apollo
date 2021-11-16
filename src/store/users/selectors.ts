import { createSelector } from "reselect";

import { AppState } from "../rootReducer";

export const selectUsers = (state: AppState) => state.users;

export const selectUsersData = createSelector(selectUsers, (users) => users.data);
export const selectUsersLoading = createSelector(selectUsers, (users) => users.loading);
export const selectUsersError = createSelector(selectUsers, (users) => users.error);
