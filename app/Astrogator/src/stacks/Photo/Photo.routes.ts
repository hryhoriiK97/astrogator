import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type PhotoStackParamList = {
  PhotoScreen: {photoUri: string};
};

export type PhotoStackNavigationProp =
  NativeStackNavigationProp<PhotoStackParamList>;

export const PhotoStackRoutes: {
  [route in keyof PhotoStackParamList]: route;
} = {
  PhotoScreen: 'PhotoScreen',
};
