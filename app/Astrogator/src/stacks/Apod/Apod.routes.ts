import {NavigatorScreenParams} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {FullImageStackParamList} from '../FullImage/FullImage.routes';

export type ApodStackParamList = {
  ApodScreen: {apodDate: string};
  FullImageStack: NavigatorScreenParams<FullImageStackParamList>;
};

export type ApodStackNavigationProp =
  NativeStackNavigationProp<ApodStackParamList>;

export const ApodStackRoutes: {
  [route in keyof ApodStackParamList]: route;
} = {
  ApodScreen: 'ApodScreen',
  FullImageStack: 'FullImageStack',
};
