/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../store';

type InitialState = {
  teams: null | any[];
};

const initialState: InitialState = {
  teams: null,
};

export const teamsSlice = createSlice({
  name: 'teams',
  initialState,
  reducers: {
    setTeams: (state, action: PayloadAction<InitialState>) => {
      state.teams = action.payload.teams;
    },
  },
});

export const { setTeams } = teamsSlice.actions;
export const selectTeams = (state: RootState) => state.teams;

export default teamsSlice.reducer;
