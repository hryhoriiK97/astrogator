import {ViewStyle} from 'react-native';
import {getRelativeUnits} from '../../utils/getRelativeUnits';

const {bp} = getRelativeUnits();

export enum DividerVariant {
  Divider_5_Vertical = 'Divider_5_Vertical',
  Divider_3_Horizontal = 'Divider_3_Horizontal',
  Divider_5_Horizontal = 'Divider_5_Horizontal',
  Divider_8_Vertical = 'Divider_8_Vertical',
  Divider_10_Vertical = 'Divider_10_Vertical',
  Divider_15_Vertical = 'Divider_15_Vertical',
  Divider_20_Vertical = 'Divider_20_Vertical',
}

export type DividerStyle = {
  [key in DividerVariant]: {
    marginVertical?: ViewStyle['marginVertical'];
    marginHorizontal?: ViewStyle['marginHorizontal'];
    marginTop?: ViewStyle['marginTop'];
    marginBottom?: ViewStyle['marginBottom'];
    marginLeft?: ViewStyle['marginLeft'];
    marginRight?: ViewStyle['marginRight'];
  };
};

export const dividerStyle: DividerStyle = {
  [DividerVariant.Divider_5_Vertical]: {
    marginVertical: 5 * bp,
  },
  [DividerVariant.Divider_3_Horizontal]: {
    marginHorizontal: 3 * bp,
  },
  [DividerVariant.Divider_5_Horizontal]: {
    marginHorizontal: 5 * bp,
  },
  [DividerVariant.Divider_8_Vertical]: {
    marginVertical: 8 * bp,
  },
  [DividerVariant.Divider_10_Vertical]: {
    marginVertical: 10 * bp,
  },
  [DividerVariant.Divider_15_Vertical]: {
    marginVertical: 15 * bp,
  },
  [DividerVariant.Divider_20_Vertical]: {
    marginVertical: 20 * bp,
  },
};
