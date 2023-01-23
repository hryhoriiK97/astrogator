import {getRelativeUnits} from '@astrogator/common';
import {StyleSheet} from 'react-native';

const {bp} = getRelativeUnits();

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#000000',
    borderRadius: 14 * bp,
    height: 200 * bp,
    overflow: 'hidden',
  },
  imageBackground: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  image: {
    flex: 1,
  },
  title: {
    color: '#ffffff',
    fontSize: 30 * bp,
  },
  iconWrapper: {
    width: 30 * bp,
    height: 30 * bp,
  },
});
