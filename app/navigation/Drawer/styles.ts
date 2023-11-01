import {Platform, StyleSheet} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {useTheme} from 'react-native-paper';
import {s, vs, ms, mvs} from 'react-native-size-matters';

import {useTranslation} from 'react-i18next';

export const useStyle = () => {
  const theme = useTheme();
  const {i18n} = useTranslation();

  const styles = () =>
    StyleSheet.create({
      container: {
        flex: 1,
        paddingHorizontal: ms(10),
      },

      profileImage: {
        height: s(150),
        width: s(150),
        alignSelf: 'center',
        marginVertical: s(20),
        borderRadius: s(80),
      },
    });
  return styles();
};
