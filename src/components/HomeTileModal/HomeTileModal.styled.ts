import { StyleSheet } from "react-native";
import { Raleway } from "../Typography";
import { AstrogatorColor } from "../../theming/theme";
import { scale, verticalScale } from "react-native-size-matters";

export const styles = StyleSheet.create({
  contentContainerstyle: {
    padding: scale(24),
  },
  title: {
    fontSize: scale(20),
    marginBottom: verticalScale(25),
  },
  description: {
    fontSize: scale(13),
    lineHeight: verticalScale(21),
    fontFamily: Raleway.Medium,
    color: AstrogatorColor.White,
  },
});
