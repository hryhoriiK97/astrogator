import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type MarsRoverPhotosStackParamList = {
  MarsRoverPhotosScreen: undefined;
};

export type MarsRoverPhotosStackNavigationProp =
  NativeStackNavigationProp<MarsRoverPhotosStackParamList>;

export const MarsRoverPhotosStackRoutes: {
  [route in keyof MarsRoverPhotosStackParamList]: route;
} = {
  MarsRoverPhotosScreen: 'MarsRoverPhotosScreen',
};
