import {NavigatorScreenParams} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MarsRoverItemResponse} from '../../types/MarsRoverItemResponse';
import {FullImageStackParamList} from '../FullImage/FullImage.routes';

export type MarsRoversStackParamList = {
  MarsRoversScreen: undefined;
  MarsRoverPhotosScreen: {rover: MarsRoverItemResponse};
  FullImageStack: NavigatorScreenParams<FullImageStackParamList>;
};

export type MarsRoversStackNavigationProp =
  NativeStackNavigationProp<MarsRoversStackParamList>;

export const MarsRoversStackRoutes: {
  [route in keyof MarsRoversStackParamList]: route;
} = {
  MarsRoversScreen: 'MarsRoversScreen',
  MarsRoverPhotosScreen: 'MarsRoverPhotosScreen',
  FullImageStack: 'FullImageStack',
};
