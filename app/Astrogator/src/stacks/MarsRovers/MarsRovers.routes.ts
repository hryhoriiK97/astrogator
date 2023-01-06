import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MarsRoverItemResponse} from '../../types/MarsRoverItemResponse';

export type MarsRoversStackParamList = {
  MarsRoversScreen: undefined;
  MarsRoverPhotosScreen: {rover: MarsRoverItemResponse};
};

export type MarsRoversStackNavigationProp =
  NativeStackNavigationProp<MarsRoversStackParamList>;

export const MarsRoversStackRoutes: {
  [route in keyof MarsRoversStackParamList]: route;
} = {
  MarsRoversScreen: 'MarsRoversScreen',
  MarsRoverPhotosScreen: 'MarsRoverPhotosScreen',
};
