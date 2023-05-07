import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./InitialState";

const usersSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        unfollowingUser: (state, { payload }) => {
            state.following = state.following.filter(
                (user) => user !== payload
            );
        },
        followingUser: ({ following }, { payload }) => {
            following.push(payload);
        },
        filtersUser: (state, { payload }) => {
            state.filters = payload;
        },
        showFollowingUsers: (state, { payload }) => {
            state.showUsers = payload.filter((user) =>
                state.following.includes(user.id)
            );
        },
        showFollowUsers: (state, { payload }) => {
            state.showUsers = payload.filter(
                (user) => !state.following.includes(user.id)
            );
        },
        showAllUsers: (state, { payload }) => {
            state.showUsers = payload;
        },
    },
});
export const usersReducer = usersSlice.reducer;
export const {
    unfollowingUser,
    followingUser,
    filtersUser,
    showFollowingUsers,
    showFollowUsers,
    showAllUsers,
} = usersSlice.actions;