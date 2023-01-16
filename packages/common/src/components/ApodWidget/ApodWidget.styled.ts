import {StyleSheet} from 'react-native';
import {getRelativeUnits} from '../../utils/getRelativeUnits';

const {bp} = getRelativeUnits();

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    minHeight: 150 * bp,
    borderRadius: 25 * bp,
    justifyContent: 'center',
    overflow: 'hidden',
    padding: 2 * bp,
  },
  imageWrapper: {
    width: 140 * bp,
    minHeight: 150 * bp,
  },
  image: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'flex-end',
  },
  contentWrapper: {
    backgroundColor: '#ffffff',
    maxWidth: 250 * bp,
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
