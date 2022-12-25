import {getRelativeUnits} from '@astrogator/common';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Lottie from 'lottie-react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {AnimatedTabBar} from '../../components/AnimatedTabBar';
import HomeStack from '../Home';

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
      tabBar={props => <AnimatedTabBar {...props} />}>
      <Tab.Screen
        name="Home"
        options={{
          // @ts-ignore
          tabBarIcon: ({ref}) => (
            <Lottie
              ref={ref}
              loop={false}
              source={require('../../../assets/lottie/home.icon.json')}
              style={styles.icon}
            />
          ),
        }}
        component={HomeStack}
      />
      <Tab.Screen
        name="Upload"
        options={{
          // @ts-ignore
          tabBarIcon: ({ref}) => (
            <Lottie
              ref={ref}
              loop={false}
              source={require('../../../assets/lottie/upload.icon.json')}
              style={styles.icon}
            />
          ),
        }}
        component={HomeStack}
      />
      <Tab.Screen
        name="Chat"
        options={{
          // @ts-ignore
          tabBarIcon: ({ref}) => (
            <Lottie
              ref={ref}
              loop={false}
              source={require('../../../assets/lottie/chat.icon.json')}
              style={styles.icon}
            />
          ),
        }}
        component={HomeStack}
      />
      <Tab.Screen
        name="Settings"
        options={{
          // @ts-ignore
          tabBarIcon: ({ref}) => (
            <Lottie
              ref={ref}
              loop={false}
              source={require('../../../assets/lottie/settings.icon.json')}
              style={styles.icon}
            />
          ),
        }}
        component={HomeStack}
      />
    </Tab.Navigator>
  );
};

export default RootStack;
