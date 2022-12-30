import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type VideosStackParamList = {
  VideosListScreen: undefined;
};

export type VideosStackNavigationProp =
  NativeStackNavigationProp<VideosStackParamList>;

export const VideosStackRoutes: {
  [route in keyof VideosStackParamList]: route;
} = {
  VideosListScreen: 'VideosListScreen',
};
