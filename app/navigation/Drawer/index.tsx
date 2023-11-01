import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {useStyle} from './styles';
import {useNavigation} from '@react-navigation/native';
import icons from '../../utils/icons';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {useDrawer} from './useDrawer';
import FastImage from 'react-native-fast-image';
import {useDispatch} from 'react-redux';
import {setIsDarkTheme} from 'store/slice/appSlice';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {DrawerItemCard} from 'components/DrawerItemCard';

export default function Drawer(props: any) {
  const {} = useDrawer();
  const styles = useStyle();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const toggleTheme = () => dispatch(setIsDarkTheme());
  return (
    <View style={styles.container}>
      <DrawerContentScrollView
        {...props}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingTop: 20}}>
        {/* profile image */}
        <TouchableOpacity activeOpacity={0.7}>
          <FastImage
            source={{
              uri: 'https://pbs.twimg.com/profile_images/952545910990495744/b59hSXUd_400x400.jpg',
            }}
            style={styles.profileImage}
          />
        </TouchableOpacity>

        <DrawerItemCard
          title="Dark Mode"
          icon={<Icon name={'weather-night'} size={20} />}
          onPress={toggleTheme}
          showSwitch={true}
        />
        <DrawerItemCard
          title="Home"
          iconSource={icons.home}
          onPress={() => navigation.navigate('Home')}
        />
        <DrawerItemCard
          title="About"
          iconSource={icons.aboutUsIcon}
          onPress={() => navigation.navigate('About')}
        />
        <DrawerItemCard
          title="Contact Us"
          iconSource={icons.aboutUsIcon}
          onPress={() => navigation.navigate('ContactUs')}
        />
      </DrawerContentScrollView>
    </View>
  );
}
