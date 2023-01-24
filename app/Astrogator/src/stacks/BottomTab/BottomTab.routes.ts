import {NavigatorScreenParams} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NasaAssetsStackParamList} from '../NasaAssets/NasaAssets.routes';

export type BottomTabParamList = {
  HomeScreen: undefined;
  MarsRoversScreen: undefined;
  NasaAssetsStack: NavigatorScreenParams<NasaAssetsStackParamList>;
};

export type BottomTabStackNavigationProp =
  NativeStackNavigationProp<BottomTabParamList>;

export const BottomTabStackRoutes: {
  [route in keyof BottomTabParamList]: route;
} = {
  HomeScreen: 'HomeScreen',
  MarsRoversScreen: 'MarsRoversScreen',
  NasaAssetsStack: 'NasaAssetsStack',
};
