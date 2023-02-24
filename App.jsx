import React from 'react';
import { Provider } from 'react-redux';

import Route from 'routes';
import store from 'reducers';
import useCachedResources from 'hooks/useCachedResources';
import { NativeBaseProvider } from 'native-base';

export default function App() {
  const isLoadingComplete = useCachedResources();
  return (
    isLoadingComplete && (
      <Provider store={store}>
        <NativeBaseProvider>
          <Route />
        </NativeBaseProvider>
      </Provider>
    )
  );
}
