import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type MarsFullImageStackParamList = {
  MarsFullImageScreen: {
    roverName: string;
    photoUri: string;
    cameraName: string;
    cameraAbbreviation: string;
    earthDate: string;
    marsSol: number;
  };
};

export type MarsFullImageStackNavigationProp =
  NativeStackNavigationProp<MarsFullImageStackParamList>;

export const MarsFullImageStackRoutes: {
  [route in keyof MarsFullImageStackParamList]: route;
} = {
  MarsFullImageScreen: 'MarsFullImageScreen',
};
