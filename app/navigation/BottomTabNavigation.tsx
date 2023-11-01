import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNav from './BottomTabNav';
import Home from 'screens/Home';
import About from 'screens/About';
import ContactUs from 'screens/ContactUs';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <BottomTabNav {...props} />}>
      <Tab.Screen name="AppNavigationStack" component={AppNavigationStack} />
    </Tab.Navigator>
  );
};
export default BottomTabNavigation;

const AppNavigationStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'Home'} component={Home} />
      <Stack.Screen name={'About'} component={About} />
      <Stack.Screen name={'ContactUs'} component={ContactUs} />
    </Stack.Navigator>
  );
};
