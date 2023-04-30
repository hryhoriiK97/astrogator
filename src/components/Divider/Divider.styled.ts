import {StyleSheet} from 'react-native';
import {dividerStyle, DividerVariant} from './Divider.utils';

export const styles = (variant: DividerVariant) =>
  StyleSheet.create({
    divider: {
      ...dividerStyle[variant],
    },
  });
