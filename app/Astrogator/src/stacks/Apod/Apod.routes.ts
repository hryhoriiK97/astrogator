import {NavigatorScreenParams} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {FullImageStackParamList} from '../FullImage/FullImage.routes';
import {VideoPlayerStackParamList} from '../VideoPlayer/VideoPlayer.routes';

export type ApodStackParamList = {
  ApodScreen: undefined;
  VideoPlayerStack: NavigatorScreenParams<VideoPlayerStackParamList>;
  FullImageStack: NavigatorScreenParams<FullImageStackParamList>;
};

export type ApodStackNavigationProp =
  NativeStackNavigationProp<ApodStackParamList>;

export const ApodStackRoutes: {
  [route in keyof ApodStackParamList]: route;
} = {
  ApodScreen: 'ApodScreen',
  VideoPlayerStack: 'VideoPlayerStack',
  FullImageStack: 'FullImageStack',
};
