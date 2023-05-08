import React, { FC } from "react";
import { HomeStackRoutes } from "./Home.routes";
import HomeScreen from "./screens/Home/Home.screen";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";

const { Navigator, Screen } = createSharedElementStackNavigator();

const HomeStack: FC = () => {
  return (
    <Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={HomeStackRoutes.HomeScreen}
    >
      <Screen name={HomeStackRoutes.HomeScreen} component={HomeScreen} />
    </Navigator>
  );
};

export default HomeStack;
