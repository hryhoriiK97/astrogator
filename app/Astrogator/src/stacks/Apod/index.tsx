import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import PhotoStack from '../Photo';
import VideoPlayerStack from '../VideoPlayer';
import {ApodStackRoutes} from './Apod.routes';
import ApodScreen from './screens/Apod/Apod.screen';

const Stack = createNativeStackNavigator();

const ApodStack: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={ApodStackRoutes.ApodScreen}>
      <Stack.Screen name={ApodStackRoutes.ApodScreen} component={ApodScreen} />
      <Stack.Screen
        name={ApodStackRoutes.VideoPlayerStack}
        component={VideoPlayerStack}
      />
      <Stack.Screen
        name={ApodStackRoutes.PhotoStack}
        options={{animation: 'slide_from_bottom'}}
        component={PhotoStack}
      />
    </Stack.Navigator>
  );
};

export default ApodStack;
