import {getRelativeUnits} from '@astrogator/common';
import {StyleSheet} from 'react-native';

const {bp} = getRelativeUnits();

export const styles = ({height = 50}: {height?: number}) =>
  StyleSheet.create({
    container: {
      height: height * bp,
    },
  });
