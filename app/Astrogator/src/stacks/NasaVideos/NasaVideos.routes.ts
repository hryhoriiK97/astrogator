import {NavigatorScreenParams} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {VideoPlayerStackParamList} from '../VideoPlayer/VideoPlayer.routes';

export type NasaVideosStackParamList = {
  NasaIVideosScreen: undefined;
  VideoPlayerStack: NavigatorScreenParams<VideoPlayerStackParamList>;
};

export type NasaVideosStackNavigationProp =
  NativeStackNavigationProp<NasaVideosStackParamList>;

export const NasaVideosStackRoutes: {
  [route in keyof NasaVideosStackParamList]: route;
} = {
  NasaIVideosScreen: 'NasaIVideosScreen',
  VideoPlayerStack: 'VideoPlayerStack',
};
