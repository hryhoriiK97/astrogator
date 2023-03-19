import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {NasaAssetDetailsStackRoutes} from './NasaAssetDetails.routes';
import NasaAssetDetailsScreen from './screens/NasaAssetDetails/NasaAssetDetails.screen';

const Stack = createNativeStackNavigator();

const NasaAssetDetailsStack: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={NasaAssetDetailsStackRoutes.NasaAssetDetailsScreen}>
      <Stack.Screen
        name={NasaAssetDetailsStackRoutes.NasaAssetDetailsScreen}
        component={NasaAssetDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default NasaAssetDetailsStack;
