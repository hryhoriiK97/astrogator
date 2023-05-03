import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { FC } from "react";
import MarsFullImageStack from "../MarsFullImage";
import { MarsRoversPhotosStackRoutes } from "./MarsRoversPhotos.routes";
import MarsRoverPhotosScreen from "./screens/MarsRoverPhotos/MarsRoverPhotos.screen";
import MarsRoverPhotosFullListScreen from "./screens/MarsRoverPhotosFullList/MarsRoverPhotosFullList.screen";

const Stack = createNativeStackNavigator();

const MarsRoversPhotosStack: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={MarsRoversPhotosStackRoutes.MarsRoverPhotosScreen}
    >
      <Stack.Screen
        name={MarsRoversPhotosStackRoutes.MarsRoverPhotosScreen}
        component={MarsRoverPhotosScreen}
      />
      <Stack.Screen
        name={MarsRoversPhotosStackRoutes.MarsRoverPhotosFullList}
        component={MarsRoverPhotosFullListScreen}
      />
      <Stack.Screen
        name={MarsRoversPhotosStackRoutes.MarsFullImageStack}
        options={{ animation: "slide_from_bottom" }}
        component={MarsFullImageStack}
      />
    </Stack.Navigator>
  );
};

export default MarsRoversPhotosStack;
