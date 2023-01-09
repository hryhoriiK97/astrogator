import {getRelativeUnits} from '@astrogator/common';
import {StyleSheet} from 'react-native';
import {AstrogatorColor} from '../../../../theming/theme';

const {bp} = getRelativeUnits();

export const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: AstrogatorColor.Black,
    width: '100%',
    height: '100%',
  },
  renderItemWrapper: {
    paddingHorizontal: 16 * bp,
  },
  imageWrapper: {
    position: 'relative',
  },
  roverImage: {
    width: '100%',
    height: 300 * bp,
  },
  footer: {
    height: 50 * bp,
  },
  modalContainer: {
    alignItems: 'center',
    padding: 10 * bp,
  },
  pickerTitle: {
    fontSize: 20 * bp,
    marginBottom: 10 * bp,
  },
});
