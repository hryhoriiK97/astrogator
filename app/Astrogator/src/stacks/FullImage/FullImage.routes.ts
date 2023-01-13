import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type FullImageStackParamList = {
  FullImageScreen: {photoUri: string};
};

export type FullImageStackNavigationProp =
  NativeStackNavigationProp<FullImageStackParamList>;

export const FullImageStackRoutes: {
  [route in keyof FullImageStackParamList]: route;
} = {
  FullImageScreen: 'FullImageScreen',
};
