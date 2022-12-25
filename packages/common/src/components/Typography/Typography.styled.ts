import {StyleSheet} from 'react-native';
import {SpaceMono} from './Typography.props';

export const styles = (variant: SpaceMono) =>
  StyleSheet.create({
    text: {
      fontFamily: variant,
      color: '#000000',
    },
  });
