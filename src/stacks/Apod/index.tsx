import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { FC } from "react";
import FullImageStack from "../FullImage";
import { ApodStackRoutes } from "./Apod.routes";
import ApodScreen from "./screens/Apod/Apod.screen";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";

const Stack = createSharedElementStackNavigator();

const ApodStack: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={ApodStackRoutes.ApodScreen}
    >
      <Stack.Screen name={ApodStackRoutes.ApodScreen} component={ApodScreen} />
      <Stack.Screen
        name={ApodStackRoutes.FullImageStack}
        component={FullImageStack}
      />
    </Stack.Navigator>
  );
};

export default ApodStack;
