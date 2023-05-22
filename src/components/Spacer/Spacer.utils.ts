import { ViewStyle } from "react-native";
import { getRelativeUnits } from "../../utils/getRelativeUnits";
import {
  moderateVerticalScale,
  scale,
  verticalScale,
} from "react-native-size-matters";

const { bp } = getRelativeUnits();

export enum SpacerVariant {
  Spacer_2_Vertical = "Spacer_2_Vertical",
  Spacer_3_Vertical = "Spacer_3_Vertical",
  Spacer_4_Vertical = "Spacer_4_Vertical",
  Spacer_5_Vertical = "Spacer_5_Vertical",
  Spacer_8_Vertical = "Spacer_8_Vertical",
  Spacer_9_Vertical = "Spacer_9_Vertical",
  Spacer_10_Vertical = "Spacer_10_Vertical",
  Spacer_12_Vertical = "Spacer_12_Vertical",
  Spacer_15_Vertical = "Spacer_15_Vertical",
  Spacer_20_Vertical = "Spacer_20_Vertical",
  Spacer_50_Vertical = "Spacer_50_Vertical",
  Spacer_3_Horizontal = "Spacer_3_Horizontal",
  Spacer_5_Horizontal = "Spacer_5_Horizontal",
  Spacer_6_Horizontal = "Spacer_6_Horizontal",
  Spacer_7_Horizontal = "Spacer_7_Horizontal",
  Spacer_10_Horizontal = "Spacer_10_Horizontal",
}

export type SpacerStyle = {
  [key in SpacerVariant]: {
    width?: ViewStyle["width"];
    height?: ViewStyle["height"];
  };
};

export const spacerStyle: SpacerStyle = {
  [SpacerVariant.Spacer_2_Vertical]: {
    height: moderateVerticalScale(2),
  },
  [SpacerVariant.Spacer_3_Vertical]: {
    height: moderateVerticalScale(3),
  },
  [SpacerVariant.Spacer_4_Vertical]: {
    height: moderateVerticalScale(4),
  },
  [SpacerVariant.Spacer_5_Vertical]: {
    height: moderateVerticalScale(5),
  },
  [SpacerVariant.Spacer_8_Vertical]: {
    height: moderateVerticalScale(8),
  },
  [SpacerVariant.Spacer_9_Vertical]: {
    height: moderateVerticalScale(9),
  },
  [SpacerVariant.Spacer_10_Vertical]: {
    height: moderateVerticalScale(10),
  },
  [SpacerVariant.Spacer_12_Vertical]: {
    height: moderateVerticalScale(10),
  },
  [SpacerVariant.Spacer_15_Vertical]: {
    height: moderateVerticalScale(15),
  },
  [SpacerVariant.Spacer_20_Vertical]: {
    height: moderateVerticalScale(20),
  },
  [SpacerVariant.Spacer_50_Vertical]: {
    height: moderateVerticalScale(50),
  },
  [SpacerVariant.Spacer_3_Horizontal]: {
    width: scale(3),
  },
  [SpacerVariant.Spacer_5_Horizontal]: {
    width: scale(5),
  },
  [SpacerVariant.Spacer_6_Horizontal]: {
    width: scale(6),
  },
  [SpacerVariant.Spacer_7_Horizontal]: {
    width: scale(7),
  },
  [SpacerVariant.Spacer_10_Horizontal]: {
    width: scale(10),
  },
};
