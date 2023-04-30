import { StyleSheet } from 'react-native';
import { AstrogatorColor } from '../../theming/theme';
import { getRelativeUnits } from '../../utils/getRelativeUnits';

const {bp} = getRelativeUnits();

export const styles = StyleSheet.create({
    container: {
      padding: 16 * bp,
    },
    dropdown: {
      height: 50 * bp,
      borderColor: AstrogatorColor.VenetianNights,
      borderWidth: 2 * bp,
      borderRadius: 8 * bp,
      paddingHorizontal: 8 * bp,
      backgroundColor: "white",
    },
    icon: {
      marginRight: 5 * bp,
    },
    label: {
      position: 'absolute',
      backgroundColor: 'white',
      borderRadius: 15 * bp,
      left: 22 * bp,
      top: 8 * bp,
      zIndex: 999,
      paddingHorizontal: 8 * bp,
      fontSize: 14 * bp,
    },
    placeholderStyle: {
      fontSize: 16 * bp,
    },
    selectedTextStyle: {
      fontSize: 16 * bp,
    },
    iconStyle: {
      width: 20 * bp,
      height: 20 * bp,
    },
    inputSearchStyle: {
      height: 40 * bp,
      fontSize: 16 * bp,
      borderColor: AstrogatorColor.VenetianNights,
      borderRadius: 5 * bp,
    },
  });