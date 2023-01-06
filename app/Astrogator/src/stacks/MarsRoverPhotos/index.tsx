import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {MarsRoverPhotosStackRoutes} from './MarsRoverPhotos.routes';
import MarsRoverPhotosScreen from './screens/MarsRoverPhotos/MarsRoverPhotos.screen';

const Stack = createNativeStackNavigator();

const MarsRoverPhotosStack: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={MarsRoverPhotosStackRoutes.MarsRoverPhotosScreen}>
      <Stack.Screen
        name={MarsRoverPhotosStackRoutes.MarsRoverPhotosScreen}
        component={MarsRoverPhotosScreen}
      />
    </Stack.Navigator>
  );
};

export default MarsRoverPhotosStack;
