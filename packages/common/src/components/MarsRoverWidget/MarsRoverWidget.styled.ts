import {AstrogatorColor} from 'Astrogator/src/theming/theme';
import {StyleSheet} from 'react-native';
import {getRelativeUnits} from '../../utils/getRelativeUnits';
import {Raleway} from '../Typography';

const {bp} = getRelativeUnits();

export const styles = StyleSheet.create({
  imageBackground: {
    width: '100%',
    height: 200 * bp,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.11)',
    borderStyle: 'solid',
    borderRadius: 8 * bp,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8 * bp,
  },
  innerWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    flex: 1,
    paddingHorizontal: 16 * bp,
    paddingTop: 20 * bp,
    paddingBottom: 29 * bp,
    borderRadius: 8 * bp,
  },
  titleWrapper: {
    width: '100%',
    padding: 6 * bp,
    backgroundColor: 'rgba(11, 11, 11, 0.66)',
    borderRadius: 4 * bp,
  },
  title: {
    fontSize: 24 * bp,
    color: AstrogatorColor.White,
  },
  marsRoverNameWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dateAuthorInfo: {
    padding: 6 * bp,
    backgroundColor: 'rgba(11, 11, 11, 0.66)',
  },
  infoTitle: {
    fontFamily: Raleway.Regular,
    fontSize: 12 * bp,
    color: '#ffffff',
  },
  moreInfoButton: {
    width: 34 * bp,
    height: 34 * bp,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8 * bp,
    backgroundColor: 'rgba(0, 0, 0, 0.66)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(203, 203, 203, 0.22)',
  },
});
