import {getRelativeUnits} from '@astrogator/common';
import {StyleSheet} from 'react-native';

const {bp} = getRelativeUnits();

export const styles = (indicatorValue?: number) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    contentContainerStyle: {
      paddingBottom: 40 * bp,
    },
    imageWrapper: {},
    imageIndicatorWrapper: {
      width: '100%',
      height: 4 * bp,
    },
    indicator: {
      width: `${indicatorValue}%`,
      height: `100%`,
      backgroundColor: 'red',
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
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 10 * bp,
    },
    pickButton: {
      backgroundColor: 'red',
      paddingVertical: 10 * bp,
      paddingHorizontal: 15 * bp,
    },
    pickTitle: {
      color: '#ffffff',
    },
  });