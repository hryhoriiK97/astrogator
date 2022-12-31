import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type VideoPlayerStackParamList = {
  VideoPlayerScreen: {videoUri: string};
};

export type VideoPlayerStackNavigationProp =
  NativeStackNavigationProp<VideoPlayerStackParamList>;

export const VideoPlayerStackRoutes: {
  [route in keyof VideoPlayerStackParamList]: route;
} = {
  VideoPlayerScreen: 'VideoPlayerScreen',
};
