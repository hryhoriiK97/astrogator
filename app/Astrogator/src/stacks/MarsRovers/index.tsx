import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import FullImageStack from '../FullImage';
import {MarsRoversStackRoutes} from './MarsRovers.routes';
import MarsRoverPhotosScreen from './screens/MarsRoverPhotos/MarsRoverPhotos.screen';
import MarsRoversScreen from './screens/MarsRovers/MarsRovers.screen';

const Stack = createNativeStackNavigator();

const MarsRoversStack: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={MarsRoversStackRoutes.MarsRoversScreen}>
      <Stack.Screen
        name={MarsRoversStackRoutes.MarsRoversScreen}
        component={MarsRoversScreen}
      />
      <Stack.Screen
        name={MarsRoversStackRoutes.MarsRoverPhotosScreen}
        component={MarsRoverPhotosScreen}
      />
      <Stack.Screen
        name={MarsRoversStackRoutes.PhotoStack}
        options={{animation: 'slide_from_bottom'}}
        component={FullImageStack}
      />
    </Stack.Navigator>
  );
};

export default MarsRoversStack;
