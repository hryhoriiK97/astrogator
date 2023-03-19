import {getRelativeUnits} from '@astrogator/common';
import {StyleSheet} from 'react-native';

const {bp} = getRelativeUnits();

export const styles = StyleSheet.create({
  actionButtonsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 4 * bp,
    paddingHorizontal: 8 * bp,
    width: 100 * bp,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.11)',
    borderStyle: 'solid',
    borderRadius: 8 * bp,
  },
  showMoreButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
