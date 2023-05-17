import { ViewStyle } from "react-native";
import { getRelativeUnits } from "../../utils/getRelativeUnits";
import { scale, verticalScale } from "react-native-size-matters";

const { bp } = getRelativeUnits();

export enum SpacerVariant {
  Spacer_2_Vertical = "Spacer_2_Vertical",
  Spacer_5_Vertical = "Spacer_5_Vertical",
  Spacer_3_Horizontal = "Spacer_3_Horizontal",
  Spacer_5_Horizontal = "Spacer_5_Horizontal",
  Spacer_6_Horizontal = "Spacer_6_Horizontal",
  Spacer_7_Horizontal = "Spacer_7_Horizontal",
  Spacer_10_Horizontal = "Spacer_10_Horizontal",
  Spacer_8_Vertical = "Spacer_8_Vertical",
  Spacer_10_Vertical = "Spacer_10_Vertical",
  Spacer_15_Vertical = "Spacer_15_Vertical",
  Spacer_20_Vertical = "Spacer_20_Vertical",
}

export type SpacerStyle = {
  [key in SpacerVariant]: {
    marginVertical?: ViewStyle["marginVertical"];
    marginHorizontal?: ViewStyle["marginHorizontal"];
    marginTop?: ViewStyle["marginTop"];
    marginBottom?: ViewStyle["marginBottom"];
    marginLeft?: ViewStyle["marginLeft"];
    marginRight?: ViewStyle["marginRight"];
  };
};

export const spacerStyle: SpacerStyle = {
  [SpacerVariant.Spacer_2_Vertical]: {
    marginVertical: verticalScale(2),
  },
  [SpacerVariant.Spacer_5_Vertical]: {
    marginVertical: verticalScale(5),
  },
  [SpacerVariant.Spacer_3_Horizontal]: {
    marginHorizontal: scale(3),
  },
  [SpacerVariant.Spacer_5_Horizontal]: {
    marginHorizontal: scale(5),
  },
  [SpacerVariant.Spacer_6_Horizontal]: {
    marginHorizontal: scale(6),
  },
  [SpacerVariant.Spacer_7_Horizontal]: {
    marginHorizontal: scale(7),
  },
  [SpacerVariant.Spacer_10_Horizontal]: {
    marginHorizontal: scale(10),
  },
  [SpacerVariant.Spacer_8_Vertical]: {
    marginVertical: verticalScale(8),
  },
  [SpacerVariant.Spacer_10_Vertical]: {
    marginVertical: verticalScale(10),
  },
  [SpacerVariant.Spacer_15_Vertical]: {
    marginVertical: verticalScale(15),
  },
  [SpacerVariant.Spacer_20_Vertical]: {
    marginVertical: verticalScale(20),
  },
};
