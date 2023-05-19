import { NasaImagesStackParamList } from "./../NasaImages/NasaImages.routes";
import { NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type NasaAssetsStackParamList = {
  NasaImagesStack: NavigatorScreenParams<NasaImagesStackParamList>;
  NasaVideosStack: undefined;
};

export type NasaAssetsStackNavigationProp =
  NativeStackNavigationProp<NasaAssetsStackParamList>;

export const NasaAssetsStackRoutes: {
  [route in keyof NasaAssetsStackParamList]: route;
} = {
  NasaImagesStack: "NasaImagesStack",
  NasaVideosStack: "NasaVideosStack",
};
