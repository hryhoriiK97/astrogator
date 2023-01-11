import {NavigatorScreenParams} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../Home/Home.routes';
import {MarsRoversStackParamList} from '../MarsRovers/MarsRovers.routes';
import {NasaAssetsStackParamList} from '../NasaAssets/NasaAssets.routes';

export type RootStackParamList = {
  HomeStack: NavigatorScreenParams<HomeStackParamList>;
  MarsRoversStack: NavigatorScreenParams<MarsRoversStackParamList>;
  NasaAssetsStack: NavigatorScreenParams<NasaAssetsStackParamList>;
};

export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

export const RootStackRoutes: {
  [route in keyof RootStackParamList]: route;
} = {
  HomeStack: 'HomeStack',
  MarsRoversStack: 'MarsRoversStack',
  NasaAssetsStack: 'NasaAssetsStack',
};
