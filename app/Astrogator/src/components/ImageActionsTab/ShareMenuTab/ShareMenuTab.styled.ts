import {getRelativeUnits} from '@astrogator/common';
import {StyleSheet} from 'react-native';
import {AstrogatorColor} from '../../../theming/theme';

const {bp} = getRelativeUnits();

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16 * bp,
    paddingVertical: 10 * bp,
  },
  title: {
    color: AstrogatorColor.White,
    fontSize: 18 * bp,
    marginBottom: 15 * bp,
  },
  socialIconsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
