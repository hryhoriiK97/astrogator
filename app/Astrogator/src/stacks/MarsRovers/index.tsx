import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {MarsRoversStackRoutes} from './MarsRovers.routes';
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
    </Stack.Navigator>
  );
};

export default MarsRoversStack;
