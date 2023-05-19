import { StyleSheet } from "react-native";
import {
  moderateScale,
  moderateVerticalScale,
  verticalScale,
} from "react-native-size-matters";
import { AstrogatorColor } from "../../../../theming/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: verticalScale(24),
    paddingHorizontal: verticalScale(16),
  },
});
