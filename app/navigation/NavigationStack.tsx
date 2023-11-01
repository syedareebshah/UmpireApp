import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigation from './BottomTabNavigation';
import React from 'react';
import {saveCurrentRouteName} from '../store/slice/appSlice';
import {useDispatch, useSelector} from 'react-redux';
import {navigationRef} from './NavigationService';
import Drawer from './Drawer';
import {StatusBar, useWindowDimensions} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Login from 'screens/Login';
import SignUp from 'screens/SignUp';
import {RootState} from 'store/slice';
import Home from 'screens/Home';
import WelcomeScreen from 'screens/WelcomeScreen';
import OversHistory from 'screens/OversHistory';

const Stack = createNativeStackNavigator();
const AppDrawer = createDrawerNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'Login'} component={Login} />
      <Stack.Screen name={'SignUp'} component={SignUp} />
    </Stack.Navigator>
  );
};

const LoggedInNavigator = () => {
  const dimensions = useWindowDimensions();
  return (
    <AppDrawer.Navigator
      drawerContent={props => <Drawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: dimensions.width >= 768 ? 'permanent' : 'front',
        drawerStyle: {
          zIndex: 1,
        },
      }}>
      <AppDrawer.Screen name={'About'} component={WelcomeScreen} />
      <AppDrawer.Screen name={'Home'} component={Home} />
      <AppDrawer.Screen name={'OversHistory'} component={OversHistory} />
    </AppDrawer.Navigator>
  );
};
const App = () => {
  const routeNameRef = React.useRef();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => state.user.loggedIn);
  const isDark = useSelector((state: RootState) => state.app.isDark);

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef.current.getCurrentRoute().name;
      }}
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.current.getCurrentRoute().name;
        // console.log("CurrentRouteName => ", currentRouteName);
        dispatch(saveCurrentRouteName(currentRouteName));
        if (previousRouteName !== currentRouteName) {
        }
        routeNameRef.current = currentRouteName;
      }}>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
      {true ? <LoggedInNavigator /> : <AuthStack />}
      {/* {isLoggedIn ? <BottomTabNavigation /> : <AuthStack />} */}
    </NavigationContainer>
  );
};
export default App;
