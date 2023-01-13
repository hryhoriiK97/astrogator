import {SpaceMono} from '@astrogator/common';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React, {FC} from 'react';
import {SafeAreaView} from 'react-native';
import {AstrogatorColor} from '../../theming/theme';
import NasaImagesStack from '../NasaImages';
import {NasaAssetsStackRoutes} from './NasaAssets.routes';
import VideosScreen from './screens/Videos/Videos.screen';

const Stack = createMaterialTopTabNavigator();

const NasaAssetsStack: FC = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: AstrogatorColor.Black}}>
      <Stack.Navigator
        initialRouteName={NasaAssetsStackRoutes.NasaImagesStack}
        screenOptions={props => {
          return {
            title: props.route.name === 'ImagesScreen' ? 'Images' : 'Videos',
            tabBarStyle: {
              backgroundColor: AstrogatorColor.Black,
            },
            tabBarIndicatorStyle: {
              backgroundColor: AstrogatorColor.VenetianNights,
            },
            tabBarLabelStyle: {
              color: AstrogatorColor.White,
              fontFamily: SpaceMono.Bold,
            },
          };
        }}>
        <Stack.Screen
          name={NasaAssetsStackRoutes.NasaImagesStack}
          component={NasaImagesStack}
        />
        <Stack.Screen
          name={NasaAssetsStackRoutes.VideosScreen}
          component={VideosScreen}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default NasaAssetsStack;
