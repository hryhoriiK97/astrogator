import {NavigatorScreenParams} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ApodStackParamList} from '../Apod/Apod.routes';

export type HomeStackParamList = {
  HomeScreen: undefined;
  ApodStack: NavigatorScreenParams<ApodStackParamList>;
};

export type HomeStackNavigationProp =
  NativeStackNavigationProp<HomeStackParamList>;

export const HomeStackRoutes: {
  [route in keyof HomeStackParamList]: route;
} = {
  HomeScreen: 'HomeScreen',
  ApodStack: 'ApodStack',
};
