import {StyleSheet} from 'react-native';
import {getRelativeUnits} from '../../utils/getRelativeUnits';

const {bp} = getRelativeUnits();

export const styles = (indicatorValue?: number) =>
  StyleSheet.create({
    imageWrapper: {
      width: '100%',
    },
    imageIndicatorWrapper: {
      width: '100%',
      height: 10 * bp,
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
      marginBottom: 30 * bp,
    },
  });
