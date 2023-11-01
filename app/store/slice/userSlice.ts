import {createSlice} from '@reduxjs/toolkit';
import {PayloadAction} from '@reduxjs/toolkit';
import {UserState} from '../../model/reducers/types';

const initialState: UserState = {
  name: '',
  loggedIn: false,
};
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userName: (state, action) => {
      return {
        ...state,
        name: action.payload?.name,
      };
    },
    logout: state => {
      return initialState;
    },
    onLogin: (state, action) => {
      return {
        ...state,
        loggedIn: true,
        ...action.payload,
      };
    },
  },
});

export const {userName, logout, onLogin} = userSlice.actions;

export default userSlice.reducer;
