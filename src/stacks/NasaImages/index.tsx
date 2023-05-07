import React, { FC } from "react";
import { SafeAreaView } from "react-native";
import { AstrogatorColor } from "../../theming/theme";
import { NasaImagesStackRoutes } from "./NasaImages.routes";

import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import NasaImagesScreen from "./screens/NasaImages/NasaImages.screen";

const { Navigator, Screen } = createSharedElementStackNavigator();

const NasaImagesStack: FC = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: AstrogatorColor.Black }}>
      <Navigator
        initialRouteName={NasaImagesStackRoutes.NasaImagesScreen}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen
          name={NasaImagesStackRoutes.NasaImagesScreen}
          component={NasaImagesScreen}
        />
      </Navigator>
    </SafeAreaView>
  );
};

export default NasaImagesStack;
