import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import FullImageStack from '../FullImage';
import {MarsRoversPhotosStackRoutes} from './MarsRoversPhotos.routes';
import MarsRoverPhotosScreen from './screens/MarsRoverPhotos/MarsRoverPhotos.screen';

const Stack = createNativeStackNavigator();

const MarsRoversPhotosStack: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={MarsRoversPhotosStackRoutes.MarsRoverPhotosScreen}>
      <Stack.Screen
        name={MarsRoversPhotosStackRoutes.MarsRoverPhotosScreen}
        component={MarsRoverPhotosScreen}
      />
      <Stack.Screen
        name={MarsRoversPhotosStackRoutes.FullImageStack}
        options={{animation: 'slide_from_bottom'}}
        component={FullImageStack}
      />
    </Stack.Navigator>
  );
};

export default MarsRoversPhotosStack;
