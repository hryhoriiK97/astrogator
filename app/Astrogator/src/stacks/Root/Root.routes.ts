import {NavigatorScreenParams} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ApodStackParamList} from '../Apod/Apod.routes';
import {BottomTabParamList} from '../BottomTab/BottomTab.routes';
import {FullImageStackParamList} from '../FullImage/FullImage.routes';
import {MarsRoversPhotosStackParamList} from '../MarsRoversPhotos/MarsRoversPhotos.routes';
import {NasaAssetDetailsStackParamList} from '../NasaAssetDetails/NasaAssetDetails.routes';
import {SelectedVideoStackParamList} from '../SelectedVideo/SelectedVideo.routes';

export type RootParamList = {
  WelcomeScreen: undefined;
  BottomTabStack: NavigatorScreenParams<BottomTabParamList>;
  ApodStack: NavigatorScreenParams<ApodStackParamList>;
  MarsRoversPhotosStack: NavigatorScreenParams<MarsRoversPhotosStackParamList>;
  NasaAssetDetailsStack: NavigatorScreenParams<NasaAssetDetailsStackParamList>;
  SelectedVideoStack: NavigatorScreenParams<SelectedVideoStackParamList>;
  FullImageStack: NavigatorScreenParams<FullImageStackParamList>;
};

export type RootStackNavigationProp = NativeStackNavigationProp<RootParamList>;

export const RootStackRoutes: {
  [route in keyof RootParamList]: route;
} = {
  WelcomeScreen: 'WelcomeScreen',
  BottomTabStack: 'BottomTabStack',
  ApodStack: 'ApodStack',
  MarsRoversPhotosStack: 'MarsRoversPhotosStack',
  NasaAssetDetailsStack: 'NasaAssetDetailsStack',
  SelectedVideoStack: 'SelectedVideoStack',
  FullImageStack: 'FullImageStack',
};
