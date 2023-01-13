import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import FullImageStack from '../FullImage';
import {NasaImagesStackRoutes} from './NasaImages.routes';
import NasaImagesScreen from './screens/NasaImages/NasaImages.screen';

const Stack = createNativeStackNavigator();

const NasaImagesStack: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={NasaImagesStackRoutes.NasaImages}>
      <Stack.Screen
        name={NasaImagesStackRoutes.NasaImages}
        component={NasaImagesScreen}
      />
      <Stack.Screen
        name={NasaImagesStackRoutes.FullImageStack}
        options={{animation: 'slide_from_bottom'}}
        component={FullImageStack}
      />
    </Stack.Navigator>
  );
};

export default NasaImagesStack;
