import {NavigatorScreenParams} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {PhotoStackParamList} from '../Photo/Photo.routes';
import {VideoPlayerStackParamList} from '../VideoPlayer/VideoPlayer.routes';

export type ApodStackParamList = {
  ApodScreen: undefined;
  VideoPlayerStack: NavigatorScreenParams<VideoPlayerStackParamList>;
  PhotoStack: NavigatorScreenParams<PhotoStackParamList>;
};

export type ApodStackNavigationProp =
  NativeStackNavigationProp<ApodStackParamList>;

export const ApodStackRoutes: {
  [route in keyof ApodStackParamList]: route;
} = {
  ApodScreen: 'ApodScreen',
  VideoPlayerStack: 'VideoPlayerStack',
  PhotoStack: 'PhotoStack',
};
