import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {MarsFullImageStackRoutes} from './MarsFullImage.routes';
import MarsFullImageScreen from './MarsFullImage.screen';

const Stack = createNativeStackNavigator();

const MarsFullImageStack: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={MarsFullImageStackRoutes.MarsFullImageScreen}>
      <Stack.Screen
        name={MarsFullImageStackRoutes.MarsFullImageScreen}
        component={MarsFullImageScreen}
      />
    </Stack.Navigator>
  );
};

export default MarsFullImageStack;
