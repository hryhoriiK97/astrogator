import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import ApodStack from '../Apod';
import BottomTabStack from '../BottomTab';
import FullImageStack from '../FullImage';
import MarsRoversPhotosStack from '../MarsRoversPhotos';
import SelectedVideoStack from '../SelectedVideo';
import {RootStackRoutes} from './Root.routes';
import WelcomeScreen from './screens/Welcome/Welcome.screen';

const Stack = createNativeStackNavigator();

const RootStack: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={RootStackRoutes.WelcomeScreen}>
      <Stack.Screen
        name={RootStackRoutes.WelcomeScreen}
        component={WelcomeScreen}
      />
      <Stack.Screen
        name={RootStackRoutes.BottomTabStack}
        component={BottomTabStack}
      />
      <Stack.Screen
        name={RootStackRoutes.ApodStack}
        options={{animation: 'slide_from_right'}}
        component={ApodStack}
      />
      <Stack.Screen
        name={RootStackRoutes.MarsRoversPhotosStack}
        options={{animation: 'slide_from_right'}}
        component={MarsRoversPhotosStack}
      />
      <Stack.Screen
        name={RootStackRoutes.SelectedVideoStack}
        options={{animation: 'slide_from_right'}}
        component={SelectedVideoStack}
      />
      <Stack.Screen
        name={RootStackRoutes.FullImageStack}
        options={{animation: 'slide_from_right'}}
        component={FullImageStack}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
