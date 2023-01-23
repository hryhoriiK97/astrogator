import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {HomeStackRoutes} from './Home.routes';
import HomeScreen from './Home.screen';

const Stack = createNativeStackNavigator();

const HomeStack: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={HomeStackRoutes.HomeScreen}>
      <Stack.Screen name={HomeStackRoutes.HomeScreen} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
