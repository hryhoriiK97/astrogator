import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {HomeStackRoutes} from './Home.routes';
import HomeScreen from './Home.screen';
import ApodScreen from './screens/Apod/Apod.screen';

const Stack = createNativeStackNavigator();

const HomeStack: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={HomeStackRoutes.HomeScreen}>
      <Stack.Screen name={HomeStackRoutes.HomeScreen} component={HomeScreen} />
      <Stack.Screen name={HomeStackRoutes.ApodScreen} component={ApodScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
