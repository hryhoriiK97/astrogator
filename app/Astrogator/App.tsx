import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {QueryClient, QueryClientProvider} from 'react-query';
import RootStack from './src/stacks/Root';

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <StatusBar barStyle="light-content" />
        <GestureHandlerRootView style={{flex: 1}}>
          <NavigationContainer>
            <RootStack />
          </NavigationContainer>
        </GestureHandlerRootView>
      </QueryClientProvider>
    </>
  );
};
export default App;
