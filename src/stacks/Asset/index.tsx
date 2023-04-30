import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { FC } from "react";
import FullImageStack from "../FullImage";
import { AssetStackRoutes } from "./Asset.routes";
import AssetScreen from "./screens/Asset/Asset.screen";

const Stack = createNativeStackNavigator();

const AssetStack: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={AssetStackRoutes.AssetScreen}
    >
      <Stack.Screen
        name={AssetStackRoutes.AssetScreen}
        component={AssetScreen}
      />
      <Stack.Screen
        name={AssetStackRoutes.FullImageStack}
        options={{ animation: "slide_from_bottom" }}
        component={FullImageStack}
      />
    </Stack.Navigator>
  );
};

export default AssetStack;
