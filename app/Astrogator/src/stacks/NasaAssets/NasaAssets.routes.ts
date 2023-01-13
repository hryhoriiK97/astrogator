import {NavigatorScreenParams} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {FullImageStackParamList} from '../FullImage/FullImage.routes';
import {NasaImagesStackParamList} from '../NasaImages/NasaImages.routes';

export type NasaAssetsStackParamList = {
  NasaImagesStack: NavigatorScreenParams<NasaImagesStackParamList>;
  VideosScreen: undefined;
  FullImageStack: NavigatorScreenParams<FullImageStackParamList>;
};

export type NasaAssetsStackNavigationProp =
  NativeStackNavigationProp<NasaAssetsStackParamList>;

export const NasaAssetsStackRoutes: {
  [route in keyof NasaAssetsStackParamList]: route;
} = {
  NasaImagesStack: 'NasaImagesStack',
  VideosScreen: 'VideosScreen',
  FullImageStack: 'FullImageStack',
};
