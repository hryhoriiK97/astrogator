import {NavigatorScreenParams} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ApodStackParamList} from '../Apod/Apod.routes';
import {HomeStackParamList} from '../Home/Home.routes';
import {MarsRoversPhotosStackParamList} from '../MarsRoversPhotos/MarsRoversPhotos.routes';

export type RootParamList = {
  BottomTabStack: NavigatorScreenParams<HomeStackParamList>;
  ApodStack: NavigatorScreenParams<ApodStackParamList>;
  MarsRoversPhotosStack: NavigatorScreenParams<MarsRoversPhotosStackParamList>;
};

export type RootStackNavigationProp = NativeStackNavigationProp<RootParamList>;

export const RootStackRoutes: {
  [route in keyof RootParamList]: route;
} = {
  BottomTabStack: 'BottomTabStack',
  ApodStack: 'ApodStack',
  MarsRoversPhotosStack: 'MarsRoversPhotosStack',
};
