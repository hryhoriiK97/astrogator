import {StyleSheet} from 'react-native';
import {getRelativeUnits} from '../../utils/getRelativeUnits';

const {bp} = getRelativeUnits();

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 5 * bp,
    backgroundColor: '#ffffff',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    elevation: 18,
  },
  title: {
    width: '50%',
    textAlign: 'center',
    fontSize: 20 * bp,
  },
  image: {
    width: '50%',
    height: 120 * bp,
    borderTopRightRadius: 5 * bp,
    borderBottomRightRadius: 5 * bp,
  },
});
