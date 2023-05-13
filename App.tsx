import "expo-dev-client";

import * as SplashScreen from "expo-splash-screen";
import "react-native-gesture-handler";

import React from "react";

import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { QueryClient, QueryClientProvider } from "react-query";
import { NetInfoConnectionProvider } from "./src/providers/NetInfoConnection";
import RootStack from "./src/stacks/Root";
import { useFonts } from "expo-font";
import { Logs } from "expo";
import { StatusBar } from "react-native";
import { LoadingScreen } from "./src/components";

Logs.enableExpoCliLogging();

const queryClient = new QueryClient();

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Raleway-Bold": require("./assets/fonts/Raleway-Bold.ttf"),
    "Raleway-Regular": require("./assets/fonts/Raleway-Regular.ttf"),
    "Raleway-Medium": require("./assets/fonts/Raleway-Medium.ttf"),
    "Raleway-Light": require("./assets/fonts/Raleway-Light.ttf"),
  });

  if (fontsLoaded) {
    setTimeout(SplashScreen.hideAsync, 3000);
  } else {
    return <LoadingScreen />;
  }
  return (
    <NetInfoConnectionProvider>
      <StatusBar
        barStyle={"light-content"}
        translucent={true}
        backgroundColor={"rgba(0,0,0, 0.31)"}
        showHideTransition={"fade"}
      />
      <QueryClientProvider client={queryClient}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <BottomSheetModalProvider>
            <NavigationContainer>
              <RootStack />
            </NavigationContainer>
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </QueryClientProvider>
    </NetInfoConnectionProvider>
  );
}
