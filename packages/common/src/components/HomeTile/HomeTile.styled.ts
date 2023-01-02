import {StyleSheet} from 'react-native';
import {getRelativeUnits} from '../../utils/getRelativeUnits';

const {bp} = getRelativeUnits();

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 12 * bp,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    elevation: 18,
    height: 200 * bp,
  },
  imageBackground: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginBottom: 16 * bp,
    backgroundColor: '#ffffff',
    borderRadius: 12 * bp,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.78,
    shadowRadius: 11.95,
    elevation: 18,
  },
  image: {
    borderRadius: 12 * bp,
  },
  title: {
    color: '#ffffff',
    fontSize: 17 * bp,
  },
});
