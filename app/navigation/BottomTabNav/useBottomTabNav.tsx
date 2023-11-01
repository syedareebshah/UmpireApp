import {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {useTheme} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/slice';
import {saveCurrentRouteName} from '../../store/slice/appSlice';

export const useBottomTabNav = () => {
  const theme = useTheme();
  const focusedId =
    useSelector((state: RootState) => state.app.currentRouteName) || 'Home';
  const {t} = useTranslation();

  // const blackList = ['Login', 'Signup', 'ForgotPassword', 'Otp', 'NewPassword'];

  const dispatch = useDispatch();
  useEffect(() => {
    if (focusedId !== '' && focusedId !== 'Home') {
      dispatch(saveCurrentRouteName('Home'));
    }
  }, []);
  return {
    theme,
    focusedId,
    t,
    dispatch,
  };
};
