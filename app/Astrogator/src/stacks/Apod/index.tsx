import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {ApodStackRoutes} from './Apod.routes';
import ApodScreen from './screens/Apod/Apod.screen';
import FullSizeImageScreen from './screens/FullSizeImage/FullSizeImage.screen';

const Stack = createNativeStackNavigator();

const ApodStack: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={ApodStackRoutes.ApodScreen}>
      <Stack.Screen name={ApodStackRoutes.ApodScreen} component={ApodScreen} />
      <Stack.Screen
        name={ApodStackRoutes.FullSizeImageScreen}
        options={{headerShown: false}}
        component={FullSizeImageScreen}
      />
    </Stack.Navigator>
  );
};

export default ApodStack;
