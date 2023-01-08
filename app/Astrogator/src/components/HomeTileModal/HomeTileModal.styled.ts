import {getRelativeUnits} from '@astrogator/common';
import {StyleSheet} from 'react-native';

const {bp} = getRelativeUnits();

export const styles = StyleSheet.create({
  container: {
    padding: 20 * bp,
  },
  title: {
    fontSize: 20 * bp,
    marginBottom: 5 * bp,
  },
  description: {
    fontSize: 13 * bp,
  },
});
