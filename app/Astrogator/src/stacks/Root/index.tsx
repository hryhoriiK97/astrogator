import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import ApodStack from '../Apod';
import BottomTabStack from '../BottomTab';
import MarsRoversPhotosStack from '../MarsRoversPhotos';
import {RootStackRoutes} from './Root.routes';

const Stack = createNativeStackNavigator();

const RootStack: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={RootStackRoutes.BottomTabStack}>
      <Stack.Screen
        name={RootStackRoutes.BottomTabStack}
        component={BottomTabStack}
      />
      <Stack.Screen
        name={RootStackRoutes.ApodStack}
        options={{animation: 'slide_from_right'}}
        component={ApodStack}
      />
      <Stack.Screen
        name={RootStackRoutes.MarsRoversPhotosStack}
        options={{animation: 'slide_from_right'}}
        component={MarsRoversPhotosStack}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
