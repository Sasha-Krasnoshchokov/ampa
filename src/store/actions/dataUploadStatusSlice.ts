/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../store';
import REQUEST_STATUSES from '../../data/constants/requestStatuses';

type InitialState = {
  dataUploadStatus: string;
};

const initialState: InitialState = {
  dataUploadStatus: REQUEST_STATUSES.IDLE,
};

export const dataUploadStatusSlice = createSlice({
  name: 'dataUploadStatus',
  initialState,
  reducers: {
    setDataUploadStatus: (state, action: PayloadAction<InitialState>) => {
      state.dataUploadStatus = action.payload.dataUploadStatus;
    },
  },
});

export const { setDataUploadStatus } = dataUploadStatusSlice.actions;
export const selectDataUploadStatus = (state: RootState) => state.dataUploadStatus;

export default dataUploadStatusSlice.reducer;
