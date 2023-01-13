import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {FullImageStackRoutes} from './FullImage.routes';
import FullImageScreen from './FullImage.screen';

const Stack = createNativeStackNavigator();

const FullImageStack: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={FullImageStackRoutes.PhotoScreen}>
      <Stack.Screen
        name={FullImageStackRoutes.PhotoScreen}
        component={FullImageScreen}
      />
    </Stack.Navigator>
  );
};

export default FullImageStack;
