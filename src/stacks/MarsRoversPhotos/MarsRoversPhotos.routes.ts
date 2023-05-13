import { NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MarsFullImageStackParamList } from "../MarsFullImage/MarsFullImage.routes";
import { MarsRoverPhotoItemResponse } from "../../types/MarsRoverPhotoItemResponse";

export type MarsRoversPhotosStackParamList = {
  MarsRoverPhotosScreen: undefined;
  MarsRoverPhotosFullList: {
    marsPhotos: MarsRoverPhotoItemResponse[];
  };
  MarsFullImageStack: NavigatorScreenParams<MarsFullImageStackParamList>;
};

export type MarsRoversPhotosStackNavigationProp =
  NativeStackNavigationProp<MarsRoversPhotosStackParamList>;

export const MarsRoversPhotosStackRoutes: {
  [route in keyof MarsRoversPhotosStackParamList]: route;
} = {
  MarsRoverPhotosScreen: "MarsRoverPhotosScreen",
  MarsRoverPhotosFullList: "MarsRoverPhotosFullList",
  MarsFullImageStack: "MarsFullImageStack",
};
