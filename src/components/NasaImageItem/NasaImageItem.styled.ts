import {StyleSheet} from 'react-native';
import {getRelativeUnits} from '../../utils/getRelativeUnits';

const {bp} = getRelativeUnits();

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 'auto',
    borderBottomWidth: 3 * bp,
    borderTopWidth: 3 * bp,
    borderColor: '#724FFF',
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
    color: '#ffffff',
  },
  subheaderTitle: {
    fontSize: 12 * bp,
    color: '#ffffff',
  },
  description: {
    color: '#ffffff',
  },
});
