import {StyleSheet, TextStyle} from 'react-native';
import {SpaceMono} from './Typography.props';

export const styles = (variant: SpaceMono, color: TextStyle['color']) =>
  StyleSheet.create({
    text: {
      fontFamily: variant,
      color: color ?? '#000000',
    },
  });
