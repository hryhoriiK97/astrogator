import {getRelativeUnits} from '@astrogator/common';
import {StyleSheet} from 'react-native';
import {AstrogatorColor} from '../../../../theming/theme';

const {bp} = getRelativeUnits();

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24 * bp,
    backgroundColor: AstrogatorColor.Black,
  },
  title: {
    fontSize: 34 * bp,
    color: AstrogatorColor.White,
    marginBottom: 16 * bp,
  },
});
