import React, { FC } from "react";
import { RootStackRoutes } from "./Root.routes";
import ApodStack from "../Apod";
import BottomTabStack from "../BottomTab";
import FullImageStack from "../FullImage";
import MarsRoversPhotosStack from "../MarsRoversPhotos";
import NasaAssetsStack from "../NasaAssets";
import SelectedVideoStack from "../SelectedVideo";
import WelcomeScreen from "./screens/Welcome/Welcome.screen";
import NasaImageScreen from "../NasaImages/screens/NasaImage/NasaImage.screen";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";

const Stack = createSharedElementStackNavigator();

const RootStack: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={RootStackRoutes.WelcomeScreen}
    >
      <Stack.Screen
        name={RootStackRoutes.WelcomeScreen}
        component={WelcomeScreen}
      />
      <Stack.Screen
        name={RootStackRoutes.BottomTabStack}
        component={BottomTabStack}
      />
      <Stack.Screen name={RootStackRoutes.ApodStack} component={ApodStack} />
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
