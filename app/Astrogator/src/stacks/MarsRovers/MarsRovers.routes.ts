import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type MarsRoversStackParamList = {
  MarsRoversScreen: undefined;
};

export type MarsRoversStackNavigationProp =
  NativeStackNavigationProp<MarsRoversStackParamList>;

export const MarsRoversStackRoutes: {
  [route in keyof MarsRoversStackParamList]: route;
} = {
  MarsRoversScreen: 'MarsRoversScreen',
};
