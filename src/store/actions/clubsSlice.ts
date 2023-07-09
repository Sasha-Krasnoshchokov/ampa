/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../store';

type InitialState = {
  clubs: null | any[];
};

const initialState: InitialState = {
  clubs: null,
};

export const clubsSlice = createSlice({
  name: 'clubs',
  initialState,
  reducers: {
    setClubs: (state, action: PayloadAction<InitialState>) => {
      state.clubs = action.payload.clubs;
    },
  },
});

export const { setClubs } = clubsSlice.actions;
export const selectClubs = (state: RootState) => state.clubs;

export default clubsSlice.reducer;
