import {SpaceMono} from '@astrogator/common';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React, {FC} from 'react';
import {SafeAreaView} from 'react-native';
import {AstrogatorColor} from '../../theming/theme';
import NasaImagesStack from '../NasaImages';
import NasaVideosStack from '../NasaVideos';
import {NasaAssetsStackRoutes} from './NasaAssets.routes';

const Stack = createMaterialTopTabNavigator();

const NasaAssetsStack: FC = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: AstrogatorColor.Black}}>
      <Stack.Navigator
        initialRouteName={NasaAssetsStackRoutes.NasaImagesStack}
        screenOptions={props => {
          return {
            title: props.route.name === 'NasaImagesStack' ? 'Images' : 'Videos',
            tabBarStyle: {
              backgroundColor: AstrogatorColor.Black,
            },
            tabBarIndicatorStyle: {
              backgroundColor: AstrogatorColor.VenetianNights,
              height: 5,
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
          name={NasaAssetsStackRoutes.NasaVideosStack}
          component={NasaVideosStack}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default NasaAssetsStack;
