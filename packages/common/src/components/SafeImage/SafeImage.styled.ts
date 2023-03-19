import {StyleSheet} from 'react-native';
import {getRelativeUnits} from '../../utils/getRelativeUnits';

const {bp} = getRelativeUnits();

export const styles = StyleSheet.create({
  imageWrapper: {
    position: 'relative',
    width: '100%',
  },
  image: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    height: 300 * bp,
  },
  loaderWrapper: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
