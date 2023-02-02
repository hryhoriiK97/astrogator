import {getRelativeUnits, Raleway} from '@astrogator/common';
import {StyleSheet} from 'react-native';
import {AstrogatorColor} from '../../../../theming/theme';

const {bp} = getRelativeUnits();

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    paddingTop: 50 * bp,
    paddingHorizontal: 16 * bp,
  },
  header: {
    maxWidth: 260 * bp,
  },
  title: {
    fontSize: 24 * bp,
    lineHeight: 28 * bp,
    fontFamily: Raleway.Bold,
    color: AstrogatorColor.White,
    marginBottom: 10 * bp,
  },
  subtitle: {
    fontSize: 14 * bp,
    lineHeight: 16 * bp,
    fontFamily: Raleway.Light,
    color: AstrogatorColor.Silver,
  },
  backgroundImage: {
    position: 'relative',
    backgroundColor: AstrogatorColor.Black,
    width: '100%',
    height: '100%',
  },
  innerWrapper: {
    flex: 1,
    paddingTop: 84 * bp,
    paddingBottom: 38 * bp,
    paddingHorizontal: 16 * bp,
    justifyContent: 'space-between',
  },
  image: {
    width: '100%',
    height: '100%',
    transform: [{scale: 1.1}],
  },
  backdropWrapper: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.65)',
  },
  redPlanet: {
    position: 'absolute',
    top: '32%',
    left: 0,
  },
  smallPlanet: {
    position: 'absolute',
    top: '20%',
    right: 0,
  },
  astronaut: {
    position: 'absolute',
    bottom: '35%',
    width: 130 * bp,
    height: 130 * bp,
    right: -20 * bp,
  },
  footerWrapper: {},
  description: {
    fontSize: 12 * bp,
    fontFamily: Raleway.Regular,
    lineHeight: 14 * bp,
    color: 'rgba(202, 202, 202, 0.75)',
    marginBottom: 32 * bp,
  },
  discoverButton: {
    width: '100%',
    height: 52 * bp,
    borderRadius: 12 * bp,
    paddingVertical: 18 * bp,
    display: 'flex',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(145,145,145, 0.33)',
    overflow: 'hidden',
  },
  blurViewStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    borderRadius: 12 * bp,
  },
  discoverButtonTitle: {
    fontSize: 14 * bp,
    width: '100%',
    height: '100%',
    fontFamily: Raleway.Bold,
    textAlign: 'center',
    color: AstrogatorColor.White,
  },
});
