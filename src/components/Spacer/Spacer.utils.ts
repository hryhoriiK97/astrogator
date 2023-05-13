import { ViewStyle } from "react-native";
import { getRelativeUnits } from "../../utils/getRelativeUnits";

const { bp } = getRelativeUnits();

export enum SpacerVariant {
  Spacer_2_Vertical = "Spacer_2_Vertical",
  Spacer_5_Vertical = "Spacer_5_Vertical",
  Spacer_3_Horizontal = "Spacer_3_Horizontal",
  Spacer_5_Horizontal = "Spacer_5_Horizontal",
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
    marginVertical: 2 * bp,
  },
  [SpacerVariant.Spacer_5_Vertical]: {
    marginVertical: 5 * bp,
  },
  [SpacerVariant.Spacer_3_Horizontal]: {
    marginHorizontal: 3 * bp,
  },
  [SpacerVariant.Spacer_5_Horizontal]: {
    marginHorizontal: 5 * bp,
  },
  [SpacerVariant.Spacer_8_Vertical]: {
    marginVertical: 8 * bp,
  },
  [SpacerVariant.Spacer_10_Vertical]: {
    marginVertical: 10 * bp,
  },
  [SpacerVariant.Spacer_15_Vertical]: {
    marginVertical: 15 * bp,
  },
  [SpacerVariant.Spacer_20_Vertical]: {
    marginVertical: 20 * bp,
  },
};
