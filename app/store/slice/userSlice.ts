import {createSlice} from '@reduxjs/toolkit';
import {PayloadAction} from '@reduxjs/toolkit';
import {UserState} from '../../model/reducers/types';

const initialState: UserState = {
  name: '',
  oversCount: 0,
  scoreCount: 0,
  wicketCount: 0,
  loggedIn: false,
  overHistory: [],
};
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    teamName: (state, action) => {
      return {
        ...state,
        name: action.payload?.name,
      };
    },
    setOverCount: (state, action) => {
      return {
        ...state,
        oversCount: action.payload?.oversCount,
      };
    },
    setOverHistory: (state, action) => {
      return {
        ...state,
        overHistory: action.payload?.overHistory,
      };
    },
    setScoreCount: (state, action) => {
      return {
        ...state,
        scoreCount: action.payload?.scoreCount,
      };
    },
    setWicketCount: (state, action) => {
      return {
        ...state,
        wicketCount: action.payload?.wicketCount,
      };
    },
  },
});

export const {
  teamName,
  setOverCount,
  setOverHistory,
  setScoreCount,
  setWicketCount,
} = userSlice.actions;

export default userSlice.reducer;
