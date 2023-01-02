import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import {QueryClient, QueryClientProvider} from 'react-query';
import RootStack from './src/stacks/Root';

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <StatusBar barStyle="light-content" />
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </QueryClientProvider>
    </>
  );
};
export default App;
