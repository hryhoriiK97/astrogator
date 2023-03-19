import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NasaAssetItemResponse} from '../../types/NasaAssetItemResponse';

export type NasaAssetDetailsStackParamList = {
  NasaAssetDetailsScreen: {nasaAssetItem: NasaAssetItemResponse};
};

export type NasaAssetDetailsStackNavigationProp =
  NativeStackNavigationProp<NasaAssetDetailsStackParamList>;

export const NasaAssetDetailsStackRoutes: {
  [route in keyof NasaAssetDetailsStackParamList]: route;
} = {
  NasaAssetDetailsScreen: 'NasaAssetDetailsScreen',
};
