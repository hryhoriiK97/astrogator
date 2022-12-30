import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import VideosListScreen from './screens/VideosList/VideosList.screen';
import {VideosStackRoutes} from './Videos.routes';

const Stack = createNativeStackNavigator();

const VideosStack: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={VideosStackRoutes.VideosListScreen}>
      <Stack.Screen
        name={VideosStackRoutes.VideosListScreen}
        component={VideosListScreen}
      />
    </Stack.Navigator>
  );
};

export default VideosStack;
