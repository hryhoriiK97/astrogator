import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {QueryClient, QueryClientProvider} from 'react-query';
import {NetInfoConnectionProvider} from './src/providers/NetInfoConnection';
import RootStack from './src/stacks/Root';

const queryClient = new QueryClient();

const App = () => {
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
