import {getRelativeUnits, Raleway} from '@astrogator/common';
import {StyleSheet} from 'react-native';
import {AstrogatorColor} from '../../theming/theme';

const {bp} = getRelativeUnits();

export const styles = StyleSheet.create({
  container: {
    padding: 20 * bp,
  },
  title: {
    fontSize: 20 * bp,
    marginBottom: 25 * bp,
  },
  description: {
    fontSize: 13 * bp,
    lineHeight: 21 * bp,
    fontFamily: Raleway.Medium,
    color: AstrogatorColor.White,
  },
});
