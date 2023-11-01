import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {useTheme} from 'react-native-paper';
import {s, vs} from 'react-native-size-matters';

interface Props extends TouchableOpacityProps {
  title?: string;
  containerStyle?: any;
}
export const CustomButton = ({title, containerStyle, onPress}: Props) => {
  const styles = useStyle();
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}>
      <Text style={styles.textInput}>{title}</Text>
    </TouchableOpacity>
  );
};
const useStyle = () => {
  const theme = useTheme();
  const styles = () =>
    StyleSheet.create({
      container: {
        width: '100%',
        borderRadius: s(2),
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: theme.colors.heading,
        backgroundColor: theme.colors.focused,
        height: vs(36),
      },
      textInput: {
        fontSize: s(14),
        color: theme.colors.background,
      },
    });
  return styles();
};
