import { NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FullImageStackParamList } from "../FullImage/FullImage.routes";
import { ApodResponse } from "../../types/ApodResponse";

export type ApodStackParamList = {
  ApodScreen: { id: string; apodDate?: string; apod?: ApodResponse };
  FullImageStack: NavigatorScreenParams<FullImageStackParamList>;
};

export type ApodStackNavigationProp =
  NativeStackNavigationProp<ApodStackParamList>;

export const ApodStackRoutes: {
  [route in keyof ApodStackParamList]: route;
} = {
  ApodScreen: "ApodScreen",
  FullImageStack: "FullImageStack",
};
