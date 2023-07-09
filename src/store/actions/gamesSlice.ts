/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../store';


type InitialState = {
  games: null | any[];
};

const initialState: InitialState = {
  games: null,
};

export const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    setGames: (state, action: PayloadAction<InitialState>) => {
      state.games = action.payload.games;
    },
  },
});

export const { setGames } = gamesSlice.actions;
export const selectGames = (state: RootState) => state.games;

export default gamesSlice.reducer;
