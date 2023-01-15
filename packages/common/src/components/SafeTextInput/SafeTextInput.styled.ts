import {StyleSheet} from 'react-native';
import {getRelativeUnits} from '../../utils/getRelativeUnits';
import {SpaceMono} from '../Typography';

const {bp} = getRelativeUnits();

export const styles = StyleSheet.create({
  container: {
    height: 80 * bp,
    justifyContent: 'space-between',
  },
  errorText: {
    fontSize: 13 * bp,
    color: '#D10000',
  },
  input: {
    width: 300 * bp,
    height: 50 * bp,
    padding: 5 * bp,
    marginTop: 5 * bp,
    fontSize: 17 * bp,
    fontFamily: SpaceMono.Bold,
    color: '#000000',
    textAlign: 'center',
    borderRadius: 10 * bp,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
});
