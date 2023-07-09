/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../store';

type InitialState = {
  salesLeads: null | any[];
};

const initialState: InitialState = {
  salesLeads: null,
};

export const salesLeadsSlice = createSlice({
  name: 'salesLeads',
  initialState,
  reducers: {
    setSalesLeads: (state, action: PayloadAction<InitialState>) => {
      state.salesLeads = action.payload.salesLeads;
    },
  },
});

export const { setSalesLeads } = salesLeadsSlice.actions;
export const selectSalesLeads = (state: RootState) => state.salesLeads;

export default salesLeadsSlice.reducer;
