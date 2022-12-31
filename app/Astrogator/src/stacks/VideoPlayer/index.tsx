import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import VideoPlayerScreen from './screens/VideoPlayer/VIdeoPlayer.screen';
import {VideoPlayerStackRoutes} from './VideoPlayer.routes';

const Stack = createNativeStackNavigator();

const VideoPlayerStack: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={VideoPlayerStackRoutes.VideoPlayerScreen}>
      <Stack.Screen
        name={VideoPlayerStackRoutes.VideoPlayerScreen}
        component={VideoPlayerScreen}
      />
    </Stack.Navigator>
  );
};

export default VideoPlayerStack;
