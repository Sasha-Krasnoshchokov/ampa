/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

// Define a type for the slice state
interface PopUpState {
  isOpen: boolean,
  content: string,
  title: string,
}

// Define the initial state using that type
const initialState: PopUpState = {
  isOpen: false,
  content: '',
  title: '',
};

export const popUpSlice = createSlice({
  name: 'popUp',
  initialState,
  reducers: {
    setPopUp: (state, action: PayloadAction<PopUpState>) => {
      state.isOpen = action.payload.isOpen;
      state.content = action.payload.content;
      state.title = action.payload.title;
    },
  },
});

export const { setPopUp } = popUpSlice.actions;
export const selectPopUp = (state: RootState) => state.popUp;

export default popUpSlice.reducer;
