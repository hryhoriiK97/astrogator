import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type HomeStackParamList = {
  HomeScreen: undefined;
  ApodStack: undefined;
};

export type HomeStackNavigationProp =
  NativeStackNavigationProp<HomeStackParamList>;

export const HomeStackRoutes: {
  [route in keyof HomeStackParamList]: route;
} = {
  HomeScreen: 'HomeScreen',
  ApodStack: 'ApodStack',
};
