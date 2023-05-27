import { StyleSheet } from "react-native";
import { AstrogatorColor } from "../../../../theming/theme";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AstrogatorColor.Black,
  },
  contentContainerStyle: {
    backgroundColor: AstrogatorColor.Transparent,
    paddingVertical: verticalScale(20),
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
