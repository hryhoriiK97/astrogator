import { Raleway } from "../../components";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React, { FC } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { AstrogatorColor } from "../../theming/theme";
import { NasaAssetsStackRoutes } from "./NasaAssets.routes";
import NasaImagesStack from "../NasaImages";
import NasaVideosStack from "../NasaVideos";
const Stack = createMaterialTopTabNavigator();

const NasaAssetsStack: FC = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: AstrogatorColor.Black }}>
      <Stack.Navigator
        initialRouteName={NasaAssetsStackRoutes.NasaImagesStack}
        screenOptions={(props) => {
          return {
            title: props.route.name === "NasaVideosStack" ? "Videos" : "Images",
            tabBarStyle: {
              backgroundColor: AstrogatorColor.Black,
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
        }}
      >
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
