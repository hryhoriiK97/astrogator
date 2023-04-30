import { NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FullImageStackParamList } from "../FullImage/FullImage.routes";
import { NasaAssetItemResponse } from "../../types/NasaAssetItemResponse";

export type AssetStackParamList = {
  AssetScreen: { asset: NasaAssetItemResponse };
  FullImageStack: NavigatorScreenParams<FullImageStackParamList>;
};

export type AssetStackNavigationProp =
  NativeStackNavigationProp<AssetStackParamList>;

export const AssetStackRoutes: {
  [route in keyof AssetStackParamList]: route;
} = {
  AssetScreen: "AssetScreen",
  FullImageStack: "FullImageStack",
};
