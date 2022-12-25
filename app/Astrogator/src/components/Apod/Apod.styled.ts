import {getRelativeUnits} from '@astrogator/common';
import {StyleSheet} from 'react-native';

const {bp} = getRelativeUnits();

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200 * bp,
    paddingHorizontal: 20 * bp,
    borderRadius: 20 * bp,
    overflow: 'hidden',
  },
  imageBackground: {
    borderRadius: 20 * bp,
    width: '100%',
    height: '100%',
  },
});
