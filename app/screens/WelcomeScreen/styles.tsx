import React from 'react';
import {StyleSheet} from 'react-native';

export const useStyle = () => {
  const styles = () =>
    StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      },
      btn: {
        backgroundColor: 'blue',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderTopEndRadius: 20,
        borderBottomStartRadius: 20,
      },
      btnTxt: {
        fontSize: 15,
        color: 'white',
        fontWeight: '800',
      },
      txtInput: {
        marginBottom: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: 'blue',
        width: '70%',
        borderTopEndRadius: 20,
        borderBottomStartRadius: 20,
      },
    });
  return styles();
};
