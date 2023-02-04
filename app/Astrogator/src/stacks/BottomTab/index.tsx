import {getRelativeUnits} from '@astrogator/common';
import {BlurView} from '@react-native-community/blur';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet} from 'react-native';
import {FavouriteIcon} from '../../../assets/svgs/tabBarIcons/FavouriteIcon';
import {HomeIcon} from '../../../assets/svgs/tabBarIcons/HomeIcon';
import {MessageIcon} from '../../../assets/svgs/tabBarIcons/MessageIcon';
import {SettingsIcon} from '../../../assets/svgs/tabBarIcons/SettingsIcon';
import {AstrogatorColor} from '../../theming/theme';
import NasaAssetsStack from '../NasaAssets';
import {BottomTabStackRoutes} from './BottomTab.routes';
import AboutAppScreen from './screens/AboutApp/AboutApp.screen';
import HomeScreen from './screens/Home/Home.screen';
import MarsRoversScreen from './screens/MarsRovers/MarsRovers.screen';

const {bp} = getRelativeUnits();

export const styles = StyleSheet.create({
  icon: {
    height: 36 * bp,
    width: 36 * bp,
  },
  blurView: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  tabBarStyle: {
    position: 'absolute',
    height: 70 * bp,
    borderTopColor: 'transparent',
    overflow: 'hidden',
  },
});

const Tab = createBottomTabNavigator();

const BottomTabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: '#F60081',
        tabBarBackground: () => (
          <BlurView blurType={'dark'} blurAmount={10} style={styles.blurView} />
        ),
        tabBarStyle: styles.tabBarStyle,
      }}>
      <Tab.Screen
        name={BottomTabStackRoutes.HomeScreen}
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
        component={HomeScreen}
      />
      <Tab.Screen
        name={BottomTabStackRoutes.MarsRoversScreen}
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
        component={MarsRoversScreen}
      />
      <Tab.Screen
        name={BottomTabStackRoutes.NasaAssetsStack}
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
        component={NasaAssetsStack}
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
        component={AboutAppScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomTabStack;
