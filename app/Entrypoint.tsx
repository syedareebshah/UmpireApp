import React, {useEffect} from 'react';
import NavigationStack from './navigation';
import {PaperProvider} from 'react-native-paper';
import SplashScreen from 'react-native-splash-screen';

import {persistor, store} from './store';
import {Provider, useSelector} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import {View} from 'react-native';
import {RootState} from './store/slice';
import {getTopHeight} from './utils/common';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import DarkTheme from 'theme/DarkTheme';
import DefaultTheme from 'theme/DefaultTheme';

const Navigator = () => {
  const currentRouteName = useSelector(
    (state: RootState) => state.app.currentRouteName,
  );
  const insets = useSafeAreaInsets();
  const isDark = useSelector((state: RootState) => state.app.isDark);
  const currentTheme = isDark ? DarkTheme : DefaultTheme;
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <PaperProvider theme={currentTheme}>
      <View
        style={{
          flex: 1,
          paddingTop: getTopHeight(currentRouteName, insets),
          backgroundColor: currentTheme.colors.background,
        }}>
        <NavigationStack />
      </View>
    </PaperProvider>
  );
};

function Entrypoint(): JSX.Element {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <Navigator />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
}

export default Entrypoint;
