import {StyleSheet} from 'react-native';
import {getRelativeUnits} from '../../utils/getRelativeUnits';

const {bp} = getRelativeUnits();

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: 300 * bp,
    borderRadius: 30 * bp,
    justifyContent: 'center',
    overflow: 'hidden',
  },
  imageBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'red',
    justifyContent: 'flex-end',
  },
  contentWrapper: {
    maxWidth: 250,
    padding: 15 * bp,
    marginLeft: 40 * bp,
  },
  apodInfoWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  apodInfoText: {
    fontSize: 12 * bp,
  },
  blurView: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    borderWidth: 0,
    borderRadius: 10 * bp,
  },
  title: {
    fontSize: 16 * bp,
  },
  description: {
    fontSize: 12 * bp,
    marginVertical: 4 * bp,
  },
  viewMoreButton: {
    padding: 6 * bp,
    borderRadius: 4 * bp,
    backgroundColor: '#724FFF',
    alignSelf: 'flex-start',
  },
  viewMoreTitle: {
    color: '#ffffff',
    fontSize: 13 * bp,
  },
});
