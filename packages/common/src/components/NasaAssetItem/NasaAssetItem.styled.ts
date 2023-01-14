import {StyleSheet} from 'react-native';
import {getRelativeUnits} from '../../utils/getRelativeUnits';

const {bp} = getRelativeUnits();

export const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 10 * bp,
    borderTopRightRadius: 10 * bp,
    width: '95%',
    height: 140 * bp,
    margin: 5 * bp,
    backgroundColor: '#ffffff',
  },
  image: {
    borderTopLeftRadius: 10 * bp,
    borderTopRightRadius: 10 * bp,
    width: '100%',
    height: '80%',
    resizeMode: 'cover',
  },
  title: {
    paddingVertical: 5 * bp,
    fontSize: 12 * bp,
    paddingRight: 10 * bp,
    paddingLeft: 5 * bp,
  },
});
