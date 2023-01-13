import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type FullImageStackParamList = {
  PhotoScreen: {photoUri: string};
};

export type FullImageStackNavigationProp =
  NativeStackNavigationProp<FullImageStackParamList>;

export const FullImageStackRoutes: {
  [route in keyof FullImageStackParamList]: route;
} = {
  PhotoScreen: 'PhotoScreen',
};
