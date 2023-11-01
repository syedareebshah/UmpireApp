import React from 'react';
import {StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';
import {s, vs, ms, mvs} from 'react-native-size-matters';
console.log(s(12));

export const useStyle = () => {
  const theme = useTheme();
  const styles = () =>
    StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: theme.colors.background,
      },
      textStyle: {
        color: theme.colors.heading,
        fontSize: ms(14),
      },
      ball: {
        backgroundColor: 'aqua',
        margin: 2,
        padding: 5,
        borderRadius: 20,
        height: 35,
        width: 35,
        alignItems: 'center',
        justifyContent: 'center',
      },
      cross: {
        position: 'absolute',
        top: -5,
        right: 0,
        backgroundColor: 'red',
        height: 15,
        width: 15,
        textAlign: 'center',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
      },
      controller: {
        flex: 1,
      },
      streight: {
        padding: ms(4),
        marginVertical: ms(3),
        backgroundColor: '#160231',
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      streightBttn: {
        height: ms(55),
        width: ms(55),
        borderRadius: ms(50),
        backgroundColor: 'aqua',
        alignItems: 'center',
        justifyContent: 'center',
        padding: ms(2),
      },
      streightBttnTxt: {
        fontSize: ms(18),
        padding: ms(10),
      },
    });
  return styles();
};
