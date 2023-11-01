import {createSlice} from '@reduxjs/toolkit';
import {AppState} from 'model/reducers/types';

const initialState: AppState = {
  currentRouteName: '',
  isDark: false,
};
export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setIsDarkTheme: (state: AppState) => {
      return {
        ...state,
        isDark: !state.isDark,
      };
    },
    saveCurrentRouteName: (state: AppState, action) => {
      return {
        ...state,
        currentRouteName: action.payload,
      };
    },
  },
});

export const {saveCurrentRouteName, setIsDarkTheme} = appSlice.actions;

export default appSlice.reducer;
