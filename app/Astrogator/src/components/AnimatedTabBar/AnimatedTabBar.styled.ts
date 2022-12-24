import {getRelativeUnits, MobilePlatform} from '@astrogator/common';
import {Platform, StyleSheet} from 'react-native';

const {bp} = getRelativeUnits();

export const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: 'white',
    height: Platform.OS === MobilePlatform.Android ? 65 * bp : 80 * bp,
  },
  activeBackground: {
    position: 'absolute',
  },
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  component: {
    height: 60 * bp,
    width: 60 * bp,
    marginTop: -5 * bp,
  },
  componentCircle: {
    flex: 1,
    borderRadius: 30 * bp,
    backgroundColor: 'white',
  },
  iconContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
