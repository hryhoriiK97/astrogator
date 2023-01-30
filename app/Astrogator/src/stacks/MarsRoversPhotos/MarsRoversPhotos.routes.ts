import {NavigatorScreenParams} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MarsRoverItemResponse} from '../../types/MarsRoverItemResponse';
import {MarsFullImageStackParamList} from '../MarsFullImage/MarsFullImage.routes';

export type MarsRoversPhotosStackParamList = {
  MarsRoverPhotosScreen: {rover: MarsRoverItemResponse};
  MarsFullImageStack: NavigatorScreenParams<MarsFullImageStackParamList>;
};

export type MarsRoversPhotosStackNavigationProp =
  NativeStackNavigationProp<MarsRoversPhotosStackParamList>;

export const MarsRoversPhotosStackRoutes: {
  [route in keyof MarsRoversPhotosStackParamList]: route;
} = {
  MarsRoverPhotosScreen: 'MarsRoverPhotosScreen',
  MarsFullImageStack: 'MarsFullImageStack',
};
