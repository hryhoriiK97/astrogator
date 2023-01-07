import {StyleSheet} from 'react-native';
import {getRelativeUnits} from '../../utils/getRelativeUnits';

const {bp} = getRelativeUnits();

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    padding: 10 * bp,
    borderRadius: 5 * bp,
    marginBottom: 15 * bp,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  tileWrapper: {
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
    flexDirection: 'row',
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
    fontSize: 30 * bp,
  },
  iconWrapper: {
    width: 30 * bp,
    height: 30 * bp,
  },
});
