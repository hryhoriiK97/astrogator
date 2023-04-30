import {StyleSheet, TextStyle} from 'react-native';
import {Raleway} from './Typography.props';

export const styles = (variant: Raleway, color: TextStyle['color']) =>
  StyleSheet.create({
    text: {
      fontFamily: variant,
      color: color ?? '#000000',
    },
  });
