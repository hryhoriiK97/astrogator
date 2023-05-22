import React, { FC } from "react";
import { SafeAreaView } from "react-native";
import { AstrogatorColor } from "../../theming/theme";

import { createSharedElementStackNavigator } from "react-navigation-shared-element";

import { NasaVideosStackRoutes } from "./NasaVideos.routes";
import NasaVideosScreen from "./screens/NasaVideos/NasaVideos.screen";

const { Navigator, Screen } = createSharedElementStackNavigator();

const NasaVideosStack: FC = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: AstrogatorColor.Black }}>
      <Navigator
        initialRouteName={NasaVideosStackRoutes.NasaVideosScreen}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen
          name={NasaVideosStackRoutes.NasaVideosScreen}
          component={NasaVideosScreen}
        />
      </Navigator>
    </SafeAreaView>
  );
};

export default NasaVideosStack;
