import {getRelativeUnits} from '@astrogator/common';
import {StyleSheet} from 'react-native';
import {AstrogatorColor} from '../../theming/theme';

const {bp} = getRelativeUnits();

export const styles = StyleSheet.create({
  container: {
    backgroundColor: AstrogatorColor.Black,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 400 * bp,
  },
});
