import { Raleway } from "../../components";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React, { FC } from "react";
import { SafeAreaView } from "react-native";
import { AstrogatorColor } from "../../theming/theme";
import { NasaAssetsStackRoutes } from "./NasaAssets.routes";
import NasaVideosScreen from "./screens/NasaVideos/NasaVideos.screen";
import NasaImagesStack from "../NasaImages";

const Stack = createMaterialTopTabNavigator();

const NasaAssetsStack: FC = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: AstrogatorColor.Black }}>
      <Stack.Navigator
        initialRouteName={NasaAssetsStackRoutes.NasaImagesStack}
        screenOptions={(props) => {
          return {
            title:
              props.route.name === "NasaImagesScreen" ? "Images" : "Videos",
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
          name={NasaAssetsStackRoutes.NasaVideosScreen}
          component={NasaVideosScreen}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default NasaAssetsStack;
