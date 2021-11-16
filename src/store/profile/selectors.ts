import { createSelector } from "reselect";

import { AppState } from "../rootReducer";

export const selectUsers = (state: AppState) => state.profile;

export const selectProfileData = createSelector(selectUsers, (profile) => profile.data);
export const selectProfileLoaded = createSelector(selectUsers, (profile) => profile.isLoaded);
export const selectProfileError = createSelector(selectUsers, (profile) => profile.error);
