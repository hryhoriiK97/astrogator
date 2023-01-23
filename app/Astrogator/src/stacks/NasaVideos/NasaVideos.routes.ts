import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type NasaVideosStackParamList = {
  NasaVideosScreen: undefined;
};

export type NasaVideosStackNavigationProp =
  NativeStackNavigationProp<NasaVideosStackParamList>;

export const NasaVideosStackRoutes: {
  [route in keyof NasaVideosStackParamList]: route;
} = {
  NasaVideosScreen: 'NasaVideosScreen',
};
