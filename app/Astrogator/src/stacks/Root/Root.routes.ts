import {NavigatorScreenParams} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../Home/Home.routes';

export type RootStackParamList = {
  HomeStack: NavigatorScreenParams<HomeStackParamList>;
};

export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

export const EntriesStackRoutes: {
  [route in keyof RootStackParamList]: route;
} = {
  HomeStack: 'HomeStack',
};
