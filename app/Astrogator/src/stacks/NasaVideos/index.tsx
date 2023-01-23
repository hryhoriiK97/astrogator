import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {NasaVideosStackRoutes} from './NasaVideos.routes';
import NasaVideosScreen from './screens/NasaVideos/NasaVideos.screen';

const Stack = createNativeStackNavigator();

const NasaVideosStack: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={NasaVideosStackRoutes.NasaVideosScreen}>
      <Stack.Screen
        name={NasaVideosStackRoutes.NasaVideosScreen}
        component={NasaVideosScreen}
      />
    </Stack.Navigator>
  );
};

export default NasaVideosStack;
