import { NasaImagesStackParamList } from "./../NasaImages/NasaImages.routes";
import { NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FullImageStackParamList } from "../FullImage/FullImage.routes";

export type NasaAssetsStackParamList = {
  NasaImagesStack: NavigatorScreenParams<NasaImagesStackParamList>;
  NasaVideosScreen: undefined;
  SelectedVideo: { videoCollectionUri: string };
  FullImageStack: NavigatorScreenParams<FullImageStackParamList>;
};

export type NasaAssetsStackNavigationProp =
  NativeStackNavigationProp<NasaAssetsStackParamList>;

export const NasaAssetsStackRoutes: {
  [route in keyof NasaAssetsStackParamList]: route;
} = {
  NasaImagesStack: "NasaImagesStack",
  NasaVideosScreen: "NasaVideosScreen",
  SelectedVideo: "SelectedVideo",
  FullImageStack: "FullImageStack",
};
