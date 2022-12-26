import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type ApodStackParamList = {
  ApodScreen: undefined;
  FullSizeImageScreen: undefined;
};

export type ApodStackNavigationProp =
  NativeStackNavigationProp<ApodStackParamList>;

export const ApodStackRoutes: {
  [route in keyof ApodStackParamList]: route;
} = {
  ApodScreen: 'ApodScreen',
  FullSizeImageScreen: 'FullSizeImageScreen',
};
