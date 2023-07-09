/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

type Auth = {
  token: null | string;
  azureId: null | string;
  user: null | any;
}

// Define the initial state using that type
const initialState: Auth = {
  token: null,
  azureId: null,
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<Auth>) => {
      state.token = action.payload.token;
      state.azureId = action.payload.azureId;
      state.user = action.payload.user;
    },
  },
});

export const { setAuth } = authSlice.actions;
export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
