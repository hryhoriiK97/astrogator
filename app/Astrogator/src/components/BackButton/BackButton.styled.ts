import {getRelativeUnits} from '@astrogator/common';
import {StyleSheet} from 'react-native';

const {bp} = getRelativeUnits();

export const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    top: 20 * bp,
    left: 0,
    paddingHorizontal: 8 * bp,
    paddingTop: 29 * bp,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    zIndex: 3,
  },
  backButtonTitle: {
    fontSize: 17 * bp,
    lineHeight: 22 * bp,
  },
});
