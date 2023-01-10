import {getRelativeUnits} from '@astrogator/common';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet} from 'react-native';
import {FavouriteIcon} from '../../../assets/svgs/tabBarIcons/FavouriteIcon';
import {HomeIcon} from '../../../assets/svgs/tabBarIcons/HomeIcon';
import {MessageIcon} from '../../../assets/svgs/tabBarIcons/MessageIcon';
import {SettingsIcon} from '../../../assets/svgs/tabBarIcons/SettingsIcon';
import {AnimatedTabBar} from '../../components/AnimatedTabBar';
import HomeStack from '../Home';
import MarsRoversStack from '../MarsRovers';
import VideosStack from '../Videos';
import {RootStackRoutes} from './Root.routes';

const {bp} = getRelativeUnits();

export const styles = StyleSheet.create({
  icon: {
    height: 36 * bp,
    width: 36 * bp,
  },
});

const Tab = createBottomTabNavigator();

const RootStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#F60081',
        tabBarStyle: {
          backgroundColor: '#b3b3b3',
          borderTopColor: 'transparent',
        },
      }}
      tabBar={props => {
        return <AnimatedTabBar {...props} />;
      }}>
      <Tab.Screen
        name={RootStackRoutes.HomeStack}
        options={{
          tabBarIcon: () => <HomeIcon />,
        }}
        component={HomeStack}
      />
      <Tab.Screen
        name={RootStackRoutes.MarsRoversStack}
        options={{
          tabBarIcon: () => <SettingsIcon />,
        }}
        component={MarsRoversStack}
      />
      <Tab.Screen
        name={RootStackRoutes.VideosStack}
        options={{
          tabBarIcon: () => <FavouriteIcon />,
        }}
        component={VideosStack}
      />
      <Tab.Screen
        name={'Settings'}
        options={{
          tabBarIcon: () => <MessageIcon />,
        }}
        component={HomeStack}
      />
    </Tab.Navigator>
  );
};

export default RootStack;
