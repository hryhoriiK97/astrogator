import { StyleSheet } from "react-native";
import { getRelativeUnits } from "../../utils/getRelativeUnits";
import { AstrogatorColor } from "../../theming/theme";

const { bp } = getRelativeUnits();

export const styles = StyleSheet.create({
  buttonWrapper: {
    position: "absolute",
    bottom: 50 * bp,
    left: 30 * bp,
    width: 60 * bp,
    height: 60 * bp,
    borderRadius: 70 * bp,
    backgroundColor: AstrogatorColor.VenetianNights,
  },
  button: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 70 * bp,
  },
});
