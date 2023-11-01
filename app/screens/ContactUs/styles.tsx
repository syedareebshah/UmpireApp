import React from 'react';
import {StyleSheet} from 'react-native';

export const useStyle = () => {
  const styles = () =>
    StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
    });
  return styles();
};
