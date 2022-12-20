import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeStack from '../Home';
import {EntriesStackRoutes} from './Root.routes';

const Tab = createBottomTabNavigator();

const RootStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={EntriesStackRoutes.HomeStack}>
      <Tab.Screen
        name={EntriesStackRoutes.HomeStack}
        options={{title: 'Home'}}
        children={HomeStack}
      />
    </Tab.Navigator>
  );
};

export default RootStack;
