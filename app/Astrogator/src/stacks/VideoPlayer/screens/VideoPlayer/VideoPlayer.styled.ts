import {getRelativeUnits} from '@astrogator/common';
import {StyleSheet} from 'react-native';

const {bp} = getRelativeUnits();

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000000',
  },
  contentContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  activityIndicator: {
    position: 'absolute',
    color: '#FFFFFF',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorHeading: {
    fontSize: 16 * bp,
    color: '#FFFFFF',
    marginBottom: 8 * bp,
  },
  subText: {
    fontSize: 14 * bp,
    color: '#FFFFFF',
    marginBottom: 32 * bp,
  },
  goBackButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12 * bp,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  goBackText: {
    fontSize: 14 * bp,
    color: '#FFFFFF',
    marginHorizontal: 12 * bp,
  },
});
