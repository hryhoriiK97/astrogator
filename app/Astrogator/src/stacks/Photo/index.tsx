import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {PhotoStackRoutes} from './Photo.routes';
import PhotoScreen from './Photo.screen';

const Stack = createNativeStackNavigator();

const PhotoStack: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={PhotoStackRoutes.PhotoScreen}>
      <Stack.Screen
        name={PhotoStackRoutes.PhotoScreen}
        options={{animation: 'slide_from_bottom'}}
        component={PhotoScreen}
      />
    </Stack.Navigator>
  );
};

export default PhotoStack;
