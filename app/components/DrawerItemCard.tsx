import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import {useTheme} from 'react-native-paper';
import {s, ms} from 'react-native-size-matters';
import ThemeController from './ThemeController';
import FastImage from 'react-native-fast-image';

interface Props extends TouchableOpacityProps {
  title?: string;
  containerStyle?: any;
  icon?: any;
  iconSource?: any;
  showSwitch?: boolean;
  switchValue?: boolean;
  switchOnValueChange?: any;
}
export const DrawerItemCard = ({
  title,
  containerStyle,
  onPress,
  icon,
  iconSource,
  showSwitch,
  switchOnValueChange,
  switchValue,
}: Props) => {
  const styles = useStyle();
  return (
    <TouchableOpacity
      accessibilityRole="button"
      style={[styles.container, containerStyle]}
      onPress={onPress}>
      {(icon || iconSource) && (
        <View style={styles.iconContainer}>
          {icon ? icon : <FastImage source={iconSource} style={styles.icon} />}
        </View>
      )}

      <Text numberOfLines={1} style={[styles.defaultTitle]}>
        {title}
      </Text>
      {showSwitch && (
        <ThemeController
          value={switchValue}
          onValueChange={switchOnValueChange}
        />
      )}
    </TouchableOpacity>
  );
};
const useStyle = () => {
  const theme = useTheme();
  const styles = () =>
    StyleSheet.create({
      container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: s(8),
        height: s(33),
      },
      defaultTitle: {
        fontSize: ms(14),
        paddingHorizontal: s(8),
        flex: 1,
      },
      iconContainer: {
        height: s(24),
        width: s(24),
        justifyContent: 'center',
        alignItems: 'center',
      },
      icon: {
        height: s(24),
        width: s(24),
      },
    });
  return styles();
};
