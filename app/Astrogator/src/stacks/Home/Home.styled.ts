import {getRelativeUnits} from '@astrogator/common';
import {StyleSheet} from 'react-native';
import {AstrogatorColor} from '../../theming/theme';

const {bp} = getRelativeUnits();

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24 * bp,
  },
  backgroundImage: {
    backgroundColor: AstrogatorColor.Black,
    paddingHorizontal: 16 * bp,
    width: '100%',
    height: '100%',
  },
});
