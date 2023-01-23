import {NavigatorScreenParams} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../Home/Home.routes';
import {MarsRoversStackParamList} from '../MarsRovers/MarsRovers.routes';
import {NasaAssetsStackParamList} from '../NasaAssets/NasaAssets.routes';

export type BottomTabParamList = {
  HomeStack: NavigatorScreenParams<HomeStackParamList>;
  MarsRoversStack: NavigatorScreenParams<MarsRoversStackParamList>;
  NasaAssetsStack: NavigatorScreenParams<NasaAssetsStackParamList>;
};

export type BottomTabStackNavigationProp =
  NativeStackNavigationProp<BottomTabParamList>;

export const BottomTabStackRoutes: {
  [route in keyof BottomTabParamList]: route;
} = {
  HomeStack: 'HomeStack',
  MarsRoversStack: 'MarsRoversStack',
  NasaAssetsStack: 'NasaAssetsStack',
};
