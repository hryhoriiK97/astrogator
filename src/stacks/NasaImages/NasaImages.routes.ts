import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NavigatorScreenParams } from "@react-navigation/native";
import { FullImageStackParamList } from "../FullImage/FullImage.routes";
import { NasaAssetTransformed } from "../../types/NasaAssetTransformed";

export type NasaImagesStackParamList = {
  NasaImagesScreen: undefined;
  FullImageStack: NavigatorScreenParams<FullImageStackParamList>;
};

export type NasaImagesStackNavigationProp =
  NativeStackNavigationProp<NasaImagesStackParamList>;

export const NasaImagesStackRoutes: {
  [route in keyof NasaImagesStackParamList]: route;
} = {
  NasaImagesScreen: "NasaImagesScreen",
  FullImageStack: "FullImageStack",
};
