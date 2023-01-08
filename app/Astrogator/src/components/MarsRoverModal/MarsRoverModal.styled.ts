import {getRelativeUnits} from '@astrogator/common';
import {StyleSheet} from 'react-native';

const {bp} = getRelativeUnits();

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    padding: 20 * bp,
  },
  title: {
    fontSize: 20 * bp,
    marginBottom: 5 * bp,
  },
  rowWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusTitle: {
    textTransform: 'capitalize',
    marginLeft: 5 * bp,
  },
  roverInfoText: {
    fontSize: 13 * bp,
    marginBottom: 5 * bp,
  },
});
