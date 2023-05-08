import { NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NasaAssetsStackParamList } from "../NasaAssets/NasaAssets.routes";
import { HomeStackParamList } from "../Home/Home.routes";

export type BottomTabParamList = {
  HomeStack: NavigatorScreenParams<HomeStackParamList>;
  MarsRoversScreen: undefined;
  NasaAssetsStack: NavigatorScreenParams<NasaAssetsStackParamList>;
  AboutAppScreen: undefined;
};

export type BottomTabStackNavigationProp =
  NativeStackNavigationProp<BottomTabParamList>;

export const BottomTabStackRoutes: {
  [route in keyof BottomTabParamList]: route;
} = {
  HomeStack: "HomeStack",
  MarsRoversScreen: "MarsRoversScreen",
  NasaAssetsStack: "NasaAssetsStack",
  AboutAppScreen: "AboutAppScreen",
};
