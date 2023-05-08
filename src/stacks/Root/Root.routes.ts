import { NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ApodStackParamList } from "../Apod/Apod.routes";
import { BottomTabParamList } from "../BottomTab/BottomTab.routes";
import { FullImageStackParamList } from "../FullImage/FullImage.routes";
import { MarsRoversPhotosStackParamList } from "../MarsRoversPhotos/MarsRoversPhotos.routes";
import { NasaAssetsStackParamList } from "../NasaAssets/NasaAssets.routes";
import { SelectedVideoStackParamList } from "../SelectedVideo/SelectedVideo.routes";
import { NasaAssetTransformed } from "../../types/NasaAssetTransformed";
import { ApodResponse } from "../../types/ApodResponse";

export type RootParamList = {
  WelcomeScreen: undefined;
  BottomTabStack: NavigatorScreenParams<BottomTabParamList>;
  ApodStack: {
    id: string;
    apodDate?: string;
    item: ApodResponse;
  };
  MarsRoversPhotosStack: NavigatorScreenParams<MarsRoversPhotosStackParamList>;
  NasaAssetsStack: NavigatorScreenParams<NasaAssetsStackParamList>;
  NasaImageScreen: {
    id: string;
    item: NasaAssetTransformed;
  };
  SelectedVideoStack: NavigatorScreenParams<SelectedVideoStackParamList>;
  FullImageStack: NavigatorScreenParams<FullImageStackParamList>;
};

export type RootStackNavigationProp = NativeStackNavigationProp<RootParamList>;

export const RootStackRoutes: {
  [route in keyof RootParamList]: route;
} = {
  WelcomeScreen: "WelcomeScreen",
  BottomTabStack: "BottomTabStack",
  ApodStack: "ApodStack",
  MarsRoversPhotosStack: "MarsRoversPhotosStack",
  NasaAssetsStack: "NasaAssetsStack",
  NasaImageScreen: "NasaImageScreen",
  SelectedVideoStack: "SelectedVideoStack",
  FullImageStack: "FullImageStack",
};
