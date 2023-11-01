import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Switch, SwitchProps} from 'react-native-paper';
import {setIsDarkTheme} from 'store/slice/appSlice';
import {RootState} from 'store/slice';

const ThemeController = (props: SwitchProps) => {
  const dispatch = useDispatch();
  const onToggleTheme: any = () => dispatch(setIsDarkTheme());
  const isDark = useSelector((state: RootState) => state.app.isDark);
  return (
    <Switch
      color={'gray'}
      {...props}
      value={props.value || isDark}
      onValueChange={props.onValueChange || onToggleTheme}
    />
  );
};

export default ThemeController;
