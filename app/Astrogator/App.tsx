import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import RootStack from './src/stacks/Root';

const App = () => {
  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
};
export default App;
