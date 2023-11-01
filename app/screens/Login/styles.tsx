import React from 'react';
import {StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';
import {s, vs, ms, mvs} from 'react-native-size-matters';

export const useStyle = () => {
  const theme = useTheme();
  const styles = () =>
    StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: ms(15),
        backgroundColor: theme.colors.background,
      },
      errorText: {
        color: theme.colors.error,
        paddingStart: vs(2),
        fontSize: s(14),
        paddingTop: s(0.5),
        alignSelf: 'flex-start',
      },
    });
  return styles();
};
