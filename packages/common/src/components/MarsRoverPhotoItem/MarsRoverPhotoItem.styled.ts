import {AstrogatorColor} from 'Astrogator/src/theming/theme';
import {StyleSheet} from 'react-native';
import {getRelativeUnits} from '../../utils/getRelativeUnits';

const {bp} = getRelativeUnits();

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    borderRadius: 13 * bp,
  },
  image: {
    borderRadius: 12 * bp,
  },
  imageInformationWrapper: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.4)',
    bottom: 0,
    left: 0,
    right: 0,
    paddingTop: 10 * bp,
    paddingBottom: 10 * bp,
    paddingLeft: 20 * bp,
    borderBottomRightRadius: 12 * bp,
    borderBottomLeftRadius: 12 * bp,
  },
  cameraName: {
    color: AstrogatorColor.White,
    fontSize: 15 * bp,
  },
  dateText: {
    color: AstrogatorColor.White,
    fontSize: 11 * bp,
  },
});
