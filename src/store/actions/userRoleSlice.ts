/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

// Define a type for the slice state
type UserRoleState = {
  userRole: string,
}

// Define the initial state using that type
const initialState: UserRoleState = {
  userRole: '',
};

export const userRoleSlice = createSlice({
  name: 'userRole',
  initialState,
  reducers: {
    setUserRole: (state, action: PayloadAction<UserRoleState>) => {
      state.userRole = action.payload.userRole;
    },
  },
});

export const { setUserRole } = userRoleSlice.actions;
export const selectUserRole = (state: RootState) => state.userRole;

export default userRoleSlice.reducer;
