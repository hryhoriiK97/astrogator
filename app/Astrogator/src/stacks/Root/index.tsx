import {getRelativeUnits} from '@astrogator/common';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet} from 'react-native';
import {FavouriteIcon} from '../../../assets/svgs/tabBarIcons/FavouriteIcon';
import {HomeIcon} from '../../../assets/svgs/tabBarIcons/HomeIcon';
import {MessageIcon} from '../../../assets/svgs/tabBarIcons/MessageIcon';
import {SettingsIcon} from '../../../assets/svgs/tabBarIcons/SettingsIcon';
import {AstrogatorColor} from '../../theming/theme';
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
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: '#F60081',
        tabBarStyle: {
          backgroundColor: AstrogatorColor.Black,
          borderTopColor: 'transparent',
        },
      }}>
      <Tab.Screen
        name={RootStackRoutes.HomeStack}
        options={{
          tabBarIcon: props => (
            <HomeIcon
              fillColor={
                props.focused
                  ? AstrogatorColor.VenetianNights
                  : AstrogatorColor.White
              }
            />
          ),
        }}
        component={HomeStack}
      />
      <Tab.Screen
        name={RootStackRoutes.MarsRoversStack}
        options={{
          tabBarIcon: props => (
            <SettingsIcon
              fillColor={
                props.focused
                  ? AstrogatorColor.VenetianNights
                  : AstrogatorColor.White
              }
            />
          ),
        }}
        component={MarsRoversStack}
      />
      <Tab.Screen
        name={RootStackRoutes.VideosStack}
        options={{
          tabBarIcon: props => (
            <FavouriteIcon
              fillColor={
                props.focused
                  ? AstrogatorColor.VenetianNights
                  : AstrogatorColor.White
              }
            />
          ),
        }}
        component={VideosStack}
      />
      <Tab.Screen
        name={'Settings'}
        options={{
          tabBarIcon: props => (
            <MessageIcon
              fillColor={
                props.focused
                  ? AstrogatorColor.VenetianNights
                  : AstrogatorColor.White
              }
            />
          ),
        }}
        component={HomeStack}
      />
    </Tab.Navigator>
  );
};

export default RootStack;
