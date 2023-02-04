import {getRelativeUnits} from '@astrogator/common';
import {StyleSheet} from 'react-native';
import {AstrogatorColor} from '../../../../theming/theme';

const {bp} = getRelativeUnits();

export const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    backgroundColor: AstrogatorColor.VenetianNights,
    width: '100%',
    height: '100%',
    paddingTop: 20 * bp,
    marginBottom: 20,
  },
  renderItemWrapper: {
    paddingHorizontal: 16,
  },
  imageWrapper: {
    position: 'relative',
  },
  roverImage: {
    width: '100%',
    height: 300 * bp,
  },
  flashList: {
    backgroundColor: AstrogatorColor.Black,
  },
  footer: {
    height: 50 * bp,
  },
  modalContainer: {
    alignItems: 'center',
    padding: 10 * bp,
  },
  pickerTitle: {
    maxWidth: 250 * bp,
    fontSize: 20 * bp,
    textAlign: 'center',
    marginBottom: 10 * bp,
  },
  picker: {
    width: 250 * bp,
    height: 150 * bp,
    marginTop: 20 * bp,
    borderRadius: 20 * bp,
  },
  getButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 250 * bp,
    height: 40 * bp,
    borderRadius: 5 * bp,
    marginTop: 30 * bp,
    backgroundColor: AstrogatorColor.VenetianNights,
  },
  disabledGetButton: {
    backgroundColor: AstrogatorColor.Gray,
  },
  getButtonTitle: {
    fontSize: 16 * bp,
    color: AstrogatorColor.White,
  },
});
