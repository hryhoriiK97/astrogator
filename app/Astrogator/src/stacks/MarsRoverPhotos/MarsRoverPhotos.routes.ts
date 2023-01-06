import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type MarsRoverPhotosStackParamList = {
  MarsRovers: undefined;
};

export type MarsRoverPhotosStackNavigationProp =
  NativeStackNavigationProp<MarsRoverPhotosStackParamList>;

export const MarsRoverPhotosStackRoutes: {
  [route in keyof MarsRoverPhotosStackParamList]: route;
} = {
  MarsRovers: 'MarsRovers',
};
