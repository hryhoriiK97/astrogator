import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type MarsRoversStackParamList = {
  MarsRovers: undefined;
};

export type MarsRoversStackNavigationProp =
  NativeStackNavigationProp<MarsRoversStackParamList>;

export const MarsRoversStackRoutes: {
  [route in keyof MarsRoversStackParamList]: route;
} = {
  MarsRovers: 'MarsRovers',
};
