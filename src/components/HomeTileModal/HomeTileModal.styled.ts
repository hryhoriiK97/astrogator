import { getRelativeUnits } from "../../utils/getRelativeUnits";
import { StyleSheet } from "react-native";
import { Raleway } from "../Typography";
import { AstrogatorColor } from "../../theming/theme";
import { scale, verticalScale } from "react-native-size-matters";

const { bp } = getRelativeUnits();

export const styles = StyleSheet.create({
  container: {
    padding: scale(20),
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
