import {NavigatorScreenParams} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MarsRoverItemResponse} from '../../types/MarsRoverItemResponse';
import {FullImageStackParamList} from '../FullImage/FullImage.routes';

export type MarsRoversPhotosStackParamList = {
  MarsRoverPhotosScreen: {rover: MarsRoverItemResponse};
  FullImageStack: NavigatorScreenParams<FullImageStackParamList>;
};

export type MarsRoversPhotosStackNavigationProp =
  NativeStackNavigationProp<MarsRoversPhotosStackParamList>;

export const MarsRoversPhotosStackRoutes: {
  [route in keyof MarsRoversPhotosStackParamList]: route;
} = {
  MarsRoverPhotosScreen: 'MarsRoverPhotosScreen',
  FullImageStack: 'FullImageStack',
};
