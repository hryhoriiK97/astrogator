import {MobilePlatform, Raleway} from '@astrogator/common';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React, {FC} from 'react';
import {Platform, SafeAreaView} from 'react-native';
import {AstrogatorColor} from '../../theming/theme';
import {NasaAssetsStackRoutes} from './NasaAssets.routes';
import NasaImagesScreen from './screens/NasaImages/NasaImages.screen';
import NasaVideosScreen from './screens/NasaVideos/NasaVideos.screen';

const Stack = createMaterialTopTabNavigator();

const NasaAssetsStack: FC = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: AstrogatorColor.Black}}>
      <Stack.Navigator
        initialRouteName={NasaAssetsStackRoutes.NasaImagesScreen}
        screenOptions={props => {
          return {
            title:
              props.route.name === NasaAssetsStackRoutes.NasaImagesScreen
                ? 'Images'
                : 'Videos',
            tabBarStyle: {
              backgroundColor: AstrogatorColor.Black,
              paddingTop: Platform.OS === MobilePlatform.Android ? 30 : 0,
            },
            tabBarIndicatorStyle: {
              backgroundColor: AstrogatorColor.VenetianNights,
              height: 5,
            },
            tabBarLabelStyle: {
              color: AstrogatorColor.White,
              fontFamily: Raleway.Bold,
            },
          };
        }}>
        <Stack.Screen
          name={NasaAssetsStackRoutes.NasaImagesScreen}
          component={NasaImagesScreen}
        />
        <Stack.Screen
          name={NasaAssetsStackRoutes.NasaVideosScreen}
          component={NasaVideosScreen}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default NasaAssetsStack;
