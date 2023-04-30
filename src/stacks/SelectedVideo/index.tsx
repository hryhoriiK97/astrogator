import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import SelectedVideoScreen from './screens/SelectedVideo/SelectedVideo.screen';
import {SelectedVideoStackRoutes} from './SelectedVideo.routes';

const Stack = createNativeStackNavigator();

const SelectedVideoStack: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={SelectedVideoStackRoutes.SelectedVideoScreen}>
      <Stack.Screen
        name={SelectedVideoStackRoutes.SelectedVideoScreen}
        component={SelectedVideoScreen}
      />
    </Stack.Navigator>
  );
};

export default SelectedVideoStack;
