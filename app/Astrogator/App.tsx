import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import RootStack from './src/stacks/Root';

const App = () => {
  return (
    <>
      <StatusBar hidden={true} barStyle="light-content" />
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </>
  );
};
export default App;
