import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type SelectedVideoStackParamList = {
  SelectedVideoScreen: {videoCollectionUri: string};
};

export type SelectedVideoStackNavigationProp =
  NativeStackNavigationProp<SelectedVideoStackParamList>;

export const SelectedVideoStackRoutes: {
  [route in keyof SelectedVideoStackParamList]: route;
} = {
  SelectedVideoScreen: 'SelectedVideoScreen',
};
