import {getRelativeUnits, Raleway} from '@astrogator/common';
import {StyleSheet} from 'react-native';
import {AstrogatorColor} from '../../theming/theme';

const {bp} = getRelativeUnits();

export const styles = StyleSheet.create({
  backButton: {
    paddingHorizontal: 8 * bp,
    paddingTop: 29 * bp,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    zIndex: 3,
  },
  backButtonTitle: {
    fontSize: 17 * bp,
    lineHeight: 22 * bp,
    fontFamily: Raleway.Medium,
    color: AstrogatorColor.White,
    marginLeft: 11 * bp,
  },
});
