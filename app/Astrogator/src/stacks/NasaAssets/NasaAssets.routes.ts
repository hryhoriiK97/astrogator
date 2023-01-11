import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type NasaAssetsStackParamList = {
  ImagesScreen: undefined;
  VideosScreen: undefined;
};

export type NasaAssetsStackNavigationProp =
  NativeStackNavigationProp<NasaAssetsStackParamList>;

export const NasaAssetsStackRoutes: {
  [route in keyof NasaAssetsStackParamList]: route;
} = {
  ImagesScreen: 'ImagesScreen',
  VideosScreen: 'VideosScreen',
};
