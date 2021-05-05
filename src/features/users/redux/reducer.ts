import { createReducer } from "@reduxjs/toolkit";
import { addCustomUser, getUsers } from "./actions";
import { UsersReducerType } from "./types";

const initialState: UsersReducerType = {
    users: []
};

export const usersReducer = createReducer(initialState, (builder) => {
    builder
      .addCase(getUsers.fulfilled, (state, action) => {
        // action is inferred correctly here
        console.log(state, action);
        state.users = action.payload;
      })
      .addCase(addCustomUser, (state, action) => {
        console.log('addCustomUser', action);
        state.users.push(action.payload);
      })
    //   // You can apply a "matcher function" to incoming actions
    //   .addMatcher(isActionWithNumberPayload, (state, action) => {})
    //   // and provide a default case if no other handlers matched
    //   .addDefaultCase((state, action) => {})
    
});
