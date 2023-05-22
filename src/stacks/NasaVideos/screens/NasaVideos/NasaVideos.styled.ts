import { StyleSheet } from "react-native";
import { AstrogatorColor } from "../../../../theming/theme";
import { scale, verticalScale } from "react-native-size-matters";

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
});
