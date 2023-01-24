import {getRelativeUnits} from '@astrogator/common';
import {StyleSheet} from 'react-native';
import {AstrogatorColor} from '../../../../theming/theme';

const {bp} = getRelativeUnits();

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AstrogatorColor.Black,
  },
  contentContainerStyle: {
    backgroundColor: AstrogatorColor.Black,
    paddingVertical: 30 * bp,
  },
});
