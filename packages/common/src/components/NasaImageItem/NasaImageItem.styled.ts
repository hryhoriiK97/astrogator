import {StyleSheet} from 'react-native';
import {getRelativeUnits} from '../../utils/getRelativeUnits';

const {bp} = getRelativeUnits();

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 510 * bp,
    backgroundColor: '#ffffff',
  },
  contentWrapper: {
    padding: 15 * bp,
  },
  subheader: {
    alignItems: 'flex-start',
    marginVertical: 5 * bp,
  },
  title: {
    fontSize: 17 * bp,
  },
  subheaderTitle: {
    fontSize: 12 * bp,
  },
});
