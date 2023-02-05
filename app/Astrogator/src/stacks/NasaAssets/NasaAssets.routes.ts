import {NavigatorScreenParams} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {FullImageStackParamList} from '../FullImage/FullImage.routes';

export type NasaAssetsStackParamList = {
  NasaImagesScreen: undefined;
  NasaVideosScreen: undefined;
  SelectedVideo: {videoCollectionUri: string};
  FullImageStack: NavigatorScreenParams<FullImageStackParamList>;
};

export type NasaAssetsStackNavigationProp =
  NativeStackNavigationProp<NasaAssetsStackParamList>;

export const NasaAssetsStackRoutes: {
  [route in keyof NasaAssetsStackParamList]: route;
} = {
  NasaImagesScreen: 'NasaImagesScreen',
  NasaVideosScreen: 'NasaVideosScreen',
  SelectedVideo: 'SelectedVideo',
  FullImageStack: 'FullImageStack',
};
