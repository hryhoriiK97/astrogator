import {NavigatorScreenParams} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {FullImageStackParamList} from '../FullImage/FullImage.routes';
import {NasaImagesStackParamList} from '../NasaImages/NasaImages.routes';
import {NasaVideosStackParamList} from '../NasaVideos/NasaVideos.routes';

export type NasaAssetsStackParamList = {
  NasaImagesStack: NavigatorScreenParams<NasaImagesStackParamList>;
  NasaVideosStack: NavigatorScreenParams<NasaVideosStackParamList>;
  FullImageStack: NavigatorScreenParams<FullImageStackParamList>;
};

export type NasaAssetsStackNavigationProp =
  NativeStackNavigationProp<NasaAssetsStackParamList>;

export const NasaAssetsStackRoutes: {
  [route in keyof NasaAssetsStackParamList]: route;
} = {
  NasaImagesStack: 'NasaImagesStack',
  NasaVideosStack: 'NasaVideosStack',
  FullImageStack: 'FullImageStack',
};
