import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type ApodStackParamList = {
  ApodScren: undefined;
  FullSizeImageScreen: undefined;
};

export type ApodStackNavigationProp =
  NativeStackNavigationProp<ApodStackParamList>;

export const ApodStackRoutes: {
  [route in keyof ApodStackParamList]: route;
} = {
  ApodScren: 'ApodScren',
  FullSizeImageScreen: 'FullSizeImageScreen',
};
