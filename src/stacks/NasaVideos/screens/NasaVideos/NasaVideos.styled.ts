import { StyleSheet } from "react-native";
import { AstrogatorColor } from "../../../../theming/theme";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { NASA_ASSETS_HEADER_HEIGHT } from "../../../../components";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AstrogatorColor.Black,
  },
  contentContainerStyle: {
    backgroundColor: AstrogatorColor.Transparent,
    paddingTop: NASA_ASSETS_HEADER_HEIGHT + 20,
    paddingBottom: verticalScale(20),
    paddingHorizontal: scale(8),
  },
  emptyDataIndicatorWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: AstrogatorColor.Black,
    paddingHorizontal: moderateScale(16),
  },
});
