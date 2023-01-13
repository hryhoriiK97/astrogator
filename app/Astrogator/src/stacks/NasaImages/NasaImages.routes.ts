import {NavigatorScreenParams} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {FullImageStackParamList} from '../FullImage/FullImage.routes';

export type NasaImagesStackParamList = {
  NasaImages: undefined;
  FullImageStack: NavigatorScreenParams<FullImageStackParamList>;
};

export type NasaImagesStackNavigationProp =
  NativeStackNavigationProp<NasaImagesStackParamList>;

export const NasaImagesStackRoutes: {
  [route in keyof NasaImagesStackParamList]: route;
} = {
  NasaImages: 'NasaImages',
  FullImageStack: 'FullImageStack',
};
