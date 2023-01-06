import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {MarsRoverPhotosStackRoutes} from './MarsRoverPhotos.routes';
import MarsRoversScreen from './screens/MarsRovers/MarsRovers.screen';

const Stack = createNativeStackNavigator();

const MarsRoverPhotosStack: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={MarsRoverPhotosStackRoutes.MarsRovers}>
      <Stack.Screen
        name={MarsRoverPhotosStackRoutes.MarsRovers}
        component={MarsRoversScreen}
      />
    </Stack.Navigator>
  );
};

export default MarsRoverPhotosStack;
