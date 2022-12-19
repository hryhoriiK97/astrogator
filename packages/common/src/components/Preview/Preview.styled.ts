import {StyleSheet} from 'react-native';
import {getRelativeUnits} from '../../utils/getRelativeUnits';

const {bp} = getRelativeUnits();

export const styles = StyleSheet.create({
  previewContainer: {
    backgroundColor: 'rgba(0,0,0,0.75)',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 100 * bp,
    zIndex: 100,
  },
  previewContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  previewText: {
    color: '#ffffff',
    fontSize: 20 * bp,
    fontWeight: '800',
  },
  iconWrapper: {
    marginLeft: 15 * bp,
  },
});
