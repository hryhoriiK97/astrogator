import {NavigatorScreenParams} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MarsRoverItemResponse} from '../../types/MarsRoverItemResponse';
import {PhotoStackParamList} from '../Photo/Photo.routes';

export type MarsRoversStackParamList = {
  MarsRoversScreen: undefined;
  MarsRoverPhotosScreen: {rover: MarsRoverItemResponse};
  PhotoStack: NavigatorScreenParams<PhotoStackParamList>;
};

export type MarsRoversStackNavigationProp =
  NativeStackNavigationProp<MarsRoversStackParamList>;

export const MarsRoversStackRoutes: {
  [route in keyof MarsRoversStackParamList]: route;
} = {
  MarsRoversScreen: 'MarsRoversScreen',
  MarsRoverPhotosScreen: 'MarsRoverPhotosScreen',
  PhotoStack: 'PhotoStack',
};
