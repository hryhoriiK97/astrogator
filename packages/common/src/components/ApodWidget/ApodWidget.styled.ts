import {StyleSheet} from 'react-native';
import {getRelativeUnits} from '../../utils/getRelativeUnits';

const {bp} = getRelativeUnits();

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    minHeight: 150 * bp,
    borderRadius: 35 * bp,
    overflow: 'hidden',
  },
  imageWrapper: {
    width: 120 * bp,
    height: '100%',
    borderTopRightRadius: 100 * bp,
    borderBottomRightRadius: 100 * bp,
    backgroundColor: '#ffffff',
  },
  contentWrapper: {
    backgroundColor: '#ffffff',
    maxWidth: 150 * bp,
    padding: 15 * bp,
  },
  apodInfoWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  apodInfoText: {
    fontSize: 12 * bp,
  },
  title: {
    fontSize: 16 * bp,
  },
  description: {
    fontSize: 12 * bp,
    marginTop: 3 * bp,
    marginBottom: 6 * bp,
  },
  viewMoreButton: {
    padding: 6 * bp,
    borderRadius: 4 * bp,
    backgroundColor: '#724FFF',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
  viewMoreTitle: {
    color: '#ffffff',
    fontSize: 13 * bp,
  },
});
