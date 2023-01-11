import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React, {FC} from 'react';
import {NasaAssetsStackRoutes} from './NasaAssets.routes';
import ImagesScreen from './screens/Images/Images.screen';
import VideosScreen from './screens/Videos/Videos.screen';

const Stack = createMaterialTopTabNavigator();

const NasaAssetsStack: FC = () => {
  return (
    <Stack.Navigator initialRouteName={NasaAssetsStackRoutes.ImagesScreen}>
      <Stack.Screen
        name={NasaAssetsStackRoutes.ImagesScreen}
        component={ImagesScreen}
      />
      <Stack.Screen
        name={NasaAssetsStackRoutes.VideosScreen}
        component={VideosScreen}
      />
    </Stack.Navigator>
  );
};

export default NasaAssetsStack;
