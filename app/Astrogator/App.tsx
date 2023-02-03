import {MobilePlatform} from '@astrogator/common';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Platform, StatusBar} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import SystemNavigationBar from 'react-native-system-navigation-bar';
import {QueryClient, QueryClientProvider} from 'react-query';
import {NetInfoConnectionProvider} from './src/providers/NetInfoConnection';
import RootStack from './src/stacks/Root';

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    if (Platform.OS === MobilePlatform.Android) {
      SystemNavigationBar.fullScreen();
      SystemNavigationBar.navigationHide();
    }
  }, []);
  return (
    <NetInfoConnectionProvider>
      <QueryClientProvider client={queryClient}>
        <StatusBar barStyle="light-content" />
        <GestureHandlerRootView style={{flex: 1}}>
          <BottomSheetModalProvider>
            <NavigationContainer>
              <RootStack />
            </NavigationContainer>
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </QueryClientProvider>
    </NetInfoConnectionProvider>
  );
};
export default App;
