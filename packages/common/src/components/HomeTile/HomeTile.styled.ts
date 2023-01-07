import {StyleSheet} from 'react-native';
import {getRelativeUnits} from '../../utils/getRelativeUnits';

const {bp} = getRelativeUnits();

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 12 * bp,
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
