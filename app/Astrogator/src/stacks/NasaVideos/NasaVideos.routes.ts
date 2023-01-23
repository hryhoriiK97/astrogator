import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type NasaVideosStackParamList = {
  NasaIVideosScreen: undefined;
  SelectedVideo: {videoCollectionUri: string};
};

export type NasaVideosStackNavigationProp =
  NativeStackNavigationProp<NasaVideosStackParamList>;

export const NasaVideosStackRoutes: {
  [route in keyof NasaVideosStackParamList]: route;
} = {
  NasaIVideosScreen: 'NasaIVideosScreen',
  SelectedVideo: 'SelectedVideo',
};
