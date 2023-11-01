import {useTranslation} from 'react-i18next';
import {useTheme} from 'react-native-paper';
import {useDispatch} from 'react-redux';

export const useDrawer = () => {
  const theme = useTheme();

  const {t} = useTranslation();

  const dispatch = useDispatch();

  return {
    theme,
    t,
    dispatch,
  };
};
