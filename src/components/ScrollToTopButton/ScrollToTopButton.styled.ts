import { StyleSheet } from "react-native";
import { getRelativeUnits } from "../../utils/getRelativeUnits";
import { AstrogatorColor } from "../../theming/theme";
import { scale } from "react-native-size-matters";

const { bp } = getRelativeUnits();

export const styles = StyleSheet.create({
  buttonWrapper: {
    position: "absolute",
    bottom: 20 * bp,
    right: 20 * bp,
    width: scale(45),
    height: scale(45),
    borderRadius: scale(45 / 2),
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
