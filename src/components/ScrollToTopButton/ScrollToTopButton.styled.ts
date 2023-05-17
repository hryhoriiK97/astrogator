import { StyleSheet } from "react-native";
import { getRelativeUnits } from "../../utils/getRelativeUnits";
import { AstrogatorColor } from "../../theming/theme";
import { scale } from "react-native-size-matters";

const { bp } = getRelativeUnits();

export const styles = StyleSheet.create({
  buttonWrapper: {
    position: "absolute",
    bottom: 50 * bp,
    left: 30 * bp,
    width: scale(60),
    height: scale(60),
    borderRadius: scale(60 / 2),
    backgroundColor: AstrogatorColor.VenetianNights,
  },
  button: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: scale(60 / 2),
  },
});
