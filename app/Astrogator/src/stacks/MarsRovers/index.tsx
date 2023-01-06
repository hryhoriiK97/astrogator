import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {MarsRoversStackRoutes} from './MarsRoverPhotos.routes';
import MarsRoversScreen from './screens/MarsRovers/MarsRovers.screen';

const Stack = createNativeStackNavigator();

const MarsRoversStack: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={MarsRoversStackRoutes.MarsRovers}>
      <Stack.Screen
        name={MarsRoversStackRoutes.MarsRovers}
        component={MarsRoversScreen}
      />
    </Stack.Navigator>
  );
};

export default MarsRoversStack;
