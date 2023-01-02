import {getRelativeUnits} from '@astrogator/common';
import {StyleSheet} from 'react-native';

const {bp} = getRelativeUnits();

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24 * bp,
    marginHorizontal: 16 * bp,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
});
