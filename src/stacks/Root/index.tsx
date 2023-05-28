import React, { FC } from "react";
import { RootStackRoutes } from "./Root.routes";
import BottomTabStack from "../BottomTab";
import FullImageStack from "../FullImage";
import MarsRoversPhotosStack from "../MarsRoversPhotos";
import NasaAssetsStack from "../NasaAssets";
import SelectedVideoStack from "../SelectedVideo";
import WelcomeScreen from "./screens/Welcome/Welcome.screen";
import NasaImageScreen from "../NasaImages/screens/NasaImage/NasaImage.screen";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import ApodScreen from "../Apod/screens/Apod/Apod.screen";
import NasaVideoScreen from "../NasaVideos/screens/NasaVideo/NasaVideo.screen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";
import { CardStyleInterpolators } from "@react-navigation/stack";
import { MobilePlatform } from "../../enums/MobilePlatform";

const Stack = createSharedElementStackNavigator();

const RootStack: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator:
          Platform.OS === MobilePlatform.Android
            ? CardStyleInterpolators.forFadeFromBottomAndroid
            : undefined,
      }}
      initialRouteName={
        !!AsyncStorage.getItem("@wasFirstInteraction")
          ? RootStackRoutes.BottomTabStack
          : RootStackRoutes.WelcomeScreen
      }
    >
      <Stack.Screen
        name={RootStackRoutes.WelcomeScreen}
        component={WelcomeScreen}
      />
      <Stack.Screen
        name={RootStackRoutes.BottomTabStack}
        component={BottomTabStack}
      />
      <Stack.Screen
        name={RootStackRoutes.ApodStack}
        component={ApodScreen}
        sharedElements={(route) => {
          const { item } = route.params;
          return [{ id: `item.${item.id}.url`, animation: "fade" }];
        }}
      />
      <Stack.Screen
        name={RootStackRoutes.MarsRoversPhotosStack}
        component={MarsRoversPhotosStack}
      />
      <Stack.Screen
        name={RootStackRoutes.NasaAssetsStack}
        component={NasaAssetsStack}
      />
      <Stack.Screen
        name={RootStackRoutes.NasaImageScreen}
        component={NasaImageScreen}
        sharedElements={(route) => {
          const { item } = route.params;
          return [{ id: `item.${item.id}.src`, animation: "fade" }];
        }}
      />
      <Stack.Screen
        name={RootStackRoutes.NasaVideoScreen}
        component={NasaVideoScreen}
        sharedElements={(route) => {
          const { item } = route.params;
          return [{ id: `item.${item.id}.src`, animation: "fade" }];
        }}
      />
      <Stack.Screen
        name={RootStackRoutes.SelectedVideoStack}
        component={SelectedVideoStack}
      />
      <Stack.Screen
        name={RootStackRoutes.FullImageStack}
        component={FullImageStack}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
