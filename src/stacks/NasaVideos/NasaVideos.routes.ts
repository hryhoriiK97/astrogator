import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NavigatorScreenParams } from "@react-navigation/native";
import { FullImageStackParamList } from "../FullImage/FullImage.routes";
import { NasaAssetTransformed } from "../../types/NasaAssetTransformed";

export type NasaVideosStackParamList = {
  NasaVideosScreen: undefined;
  VideoPlayerStack: NavigatorScreenParams<FullImageStackParamList>;
};

export type NasaVideosStackNavigationProp =
  NativeStackNavigationProp<NasaVideosStackParamList>;

export const NasaVideosStackRoutes: {
  [route in keyof NasaVideosStackParamList]: route;
} = {
  NasaVideosScreen: "NasaVideosScreen",
  VideoPlayerStack: "VideoPlayerStack",
};
