import {getRelativeUnits} from '@astrogator/common';
import {StyleSheet} from 'react-native';

const {bp} = getRelativeUnits();

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainerStyle: {
    paddingBottom: 40 * bp,
  },
  image: {
    width: '100%',
    height: 300 * bp,
  },
  imageInfoWrapper: {
    marginBottom: 10 * bp,
  },
  contentWrapper: {
    paddingVertical: 10 * bp,
    paddingHorizontal: 16 * bp,
  },
  title: {
    fontSize: 25 * bp,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 4,
    marginBottom: 5 * bp,
  },
  controlsWrapper: {
    marginTop: 10 * bp,
  },
});
