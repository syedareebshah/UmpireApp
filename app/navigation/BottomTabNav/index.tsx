import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useStyle} from './styles';
import {useNavigation} from '@react-navigation/native';
import {useBottomTabNav} from './useBottomTabNav';
import FastImage from 'react-native-fast-image';
import icons from 'utils/icons';

export default function BottomTabNav(props) {
  const {theme, focusedId} = useBottomTabNav();
  const styles = useStyle();
  const navigation = useNavigation();
  const goTo = name => () => navigation.navigate(name);
  const blackList = ['-'];
  const bottomButtonsList = [
    {
      title: 'Home',
      routeName: 'Home',
      icon: icons.home,
      onPress: goTo('Home'),
    },
    {
      title: 'Contact Us',
      routeName: 'ContactUs',
      icon: icons.home,
      onPress: goTo('ContactUs'),
    },
    {
      title: 'About Us',
      routeName: 'About',
      icon: icons.aboutUsIcon,
      onPress: goTo('About'),
    },
  ];

  const renderButton = (item, index) => {
    return (
      <TouchableOpacity
        key={index}
        style={[
          styles.subcontainer,
          {width: `${100 / bottomButtonsList.length}%`},
        ]}
        onPress={item?.onPress}>
        <FastImage
          source={item?.icon}
          style={styles.iconStyle}
          tintColor={
            focusedId == item?.routeName
              ? theme.colors.focused
              : theme.colors.heading
          }
        />
        <Text
          style={[
            focusedId == item?.routeName
              ? styles.focusedTitle
              : styles.defaultTitle,
          ]}>
          {item?.title}
        </Text>
      </TouchableOpacity>
    );
  };

  if (blackList.includes(focusedId)) return <></>;
  return (
    <View style={styles.container}>{bottomButtonsList.map(renderButton)}</View>
  );
}
