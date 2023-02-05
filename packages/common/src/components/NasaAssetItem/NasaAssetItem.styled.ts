import {StyleSheet} from 'react-native';
import {getRelativeUnits} from '../../utils/getRelativeUnits';

const {bp} = getRelativeUnits();

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    borderRadius: 12 * bp,
    width: '95%',
    height: 140 * bp,
    margin: 5 * bp,
    backgroundColor: '#ffffff',
  },
  image: {
    borderRadius: 10 * bp,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  buttonsWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: 70 * bp,
    height: 30 * bp,
    paddingHorizontal: 5 * bp,
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.85)',
    bottom: 5 * bp,
    right: 5 * bp,
    borderRadius: 4 * bp,
  },
  button: {
    width: 20 * bp,
    height: 20 * bp,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2 * bp,
    padding: 4 * bp,
    borderColor: 'rgba(203, 203, 203, 1)',
    borderRadius: 8 * bp,
  },
});
