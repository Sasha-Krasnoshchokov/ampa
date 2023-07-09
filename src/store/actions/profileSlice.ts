/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../store';

// Define the initial state using that type
export const initialState: any = {
  email: '',
  entityType: null,
  gameRates: null,
  id: '',
  name: '',
  organizationType: null,
  ownerId: '',
  stripeCustomerId: '',
  type: '',
  url: null,
  logo: '',
  contacts: null,
  address: null,
  users: null,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<any>) => {
      state.users = action.payload.users;
      state.url = action.payload.url;
      state.type = action.payload.type;
      state.stripeCustomerId = action.payload.stripeCustomerId;
      state.ownerId = action.payload.ownerId;
      state.id = action.payload.id;
      state.address = action.payload.address;
      state.contacts = action.payload.contacts;
      state.email = action.payload.email;
      state.entityType = action.payload.entityType;
      state.gameRates = action.payload.gameRates;
      state.organizationType = action.payload.organizationType;
      state.name = action.payload.name;
      state.logo = action.payload.logo;
    },
  },
});

export const { setProfile } = profileSlice.actions;
export const selectProfile = (state: RootState) => state.profile;

export default profileSlice.reducer;
