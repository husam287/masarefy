import React, { useEffect } from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { I18nManager } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';

import { login } from 'reducers/authReducer';
import useCheckNewUpdates from 'hooks/useCheckNewUpdate';
import COLORS from 'constants/Colors';
import NotificationListnerContainer from 'components/general/NotificationListnerContainer';
import SnackbarComponent from 'components/general/SnackbarComponent';
import MainStack from './stacks/MainStack';

function Route() {
  const isSignedIn = useSelector((state) => state.auth.userToken);
  const dispatch = useDispatch();

  useCheckNewUpdates();

  const initiallizeLang = async () => {
    I18nManager.allowRTL(false);
    I18nManager.forceRTL(false);
  };

  // Non user login
  useEffect(() => {
    const bootstrapAsync = async () => {
      const userToken = await AsyncStorage.getItem('token');
      dispatch(login(userToken));
      initiallizeLang();
    };

    bootstrapAsync();
  }, [dispatch]);

  // User login
  useEffect(() => {
    if (isSignedIn) {
      // nothing here
    }
  }, [isSignedIn]);

  const navTheme = DefaultTheme;
  navTheme.colors.background = COLORS.light;

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={navTheme}>
        <NotificationListnerContainer>
          <MainStack />

          <Toast />
          <SnackbarComponent />
        </NotificationListnerContainer>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default Route;
