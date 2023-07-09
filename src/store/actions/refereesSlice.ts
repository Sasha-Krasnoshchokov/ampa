/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../store';

type InitialState = {
  referees: null | any[];
};

const initialState: InitialState = {
  referees: null,
};

export const refereesSlice = createSlice({
  name: 'referees',
  initialState,
  reducers: {
    setReferees: (state, action: PayloadAction<InitialState>) => {
      state.referees = action.payload.referees;
    },
  },
});

export const { setReferees } = refereesSlice.actions;
export const selectReferees = (state: RootState) => state.referees;

export default refereesSlice.reducer;
