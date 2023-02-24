import React from 'react';
import { Provider } from 'react-redux';

import Route from 'routes';
import store from 'reducers';
import useCachedResources from 'hooks/useCachedResources';
import { NativeBaseProvider } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  const isLoadingComplete = useCachedResources();

  const config = {
    dependencies: {
      'linear-gradient': LinearGradient,
    },
  };

  return (
    isLoadingComplete && (
      <Provider store={store}>
        <NativeBaseProvider config={config}>
          <Route />
        </NativeBaseProvider>
      </Provider>
    )
  );
}
