import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import authReducer from './actions/authSlice';
import clubsReducer from './actions/clubsSlice';
import gamesReducer from './actions/gamesSlice';
import teamsReducer from './actions/teamsSlice';
import refereesReducer from './actions/refereesSlice';
import salesLeadsReducer from './actions/salesLeadsSlice';
import dataUploadStatusReducer from './actions/dataUploadStatusSlice';
import popUpReducer from './actions/popUpSlice';

import profileReducer from './actions/profileSlice';
import userRoleReducer from './actions/userRoleSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    clubs: clubsReducer,
    games: gamesReducer,
    teams: teamsReducer,
    referees: refereesReducer,
    salesLeads: salesLeadsReducer,
    dataUploadStatus: dataUploadStatusReducer,
    popUp: popUpReducer,

    profile: profileReducer,
    userRole: userRoleReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
