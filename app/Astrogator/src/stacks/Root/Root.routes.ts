import {NavigatorScreenParams} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../Home/Home.routes';
import {MarsRoversStackParamList} from '../MarsRovers/MarsRovers.routes';
import {VideosStackParamList} from '../Videos/Videos.routes';

export type RootStackParamList = {
  HomeStack: NavigatorScreenParams<HomeStackParamList>;
  MarsRoversStack: NavigatorScreenParams<MarsRoversStackParamList>;
  VideosStack: NavigatorScreenParams<VideosStackParamList>;
};

export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

export const RootStackRoutes: {
  [route in keyof RootStackParamList]: route;
} = {
  HomeStack: 'HomeStack',
  MarsRoversStack: 'MarsRoversStack',
  VideosStack: 'VideosStack',
};
