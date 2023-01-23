import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {NasaVideosStackRoutes} from './NasaVideos.routes';
import NasaVideosScreen from './screens/NasaVideos/NasaVideos.screen';
import SelectedVideoScreen from './screens/SelectedVideo/SelectedVideo.screen';

const Stack = createNativeStackNavigator();

const NasaVideosStack: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={NasaVideosStackRoutes.NasaIVideosScreen}>
      <Stack.Screen
        name={NasaVideosStackRoutes.NasaIVideosScreen}
        component={NasaVideosScreen}
      />
      <Stack.Screen
        name={NasaVideosStackRoutes.SelectedVideo}
        options={{
          headerShown: false,
        }}
        component={SelectedVideoScreen}
      />
    </Stack.Navigator>
  );
};

export default NasaVideosStack;
