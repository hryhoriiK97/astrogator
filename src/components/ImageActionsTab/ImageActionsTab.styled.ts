import { getRelativeUnits } from "../../utils/getRelativeUnits";
import { StyleSheet } from "react-native";
import { AstrogatorColor } from "../../theming/theme";

const { bp } = getRelativeUnits();

export const styles = StyleSheet.create({
  actionButtonsWrapper: {
    flexDirection: "row",
    position: "absolute",
    bottom: 15 * bp,
    right: 15 * bp,
  },
  showMoreButton: {
    backgroundColor: AstrogatorColor.Black,
    width: 40 * bp,
    height: 40 * bp,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20 * bp,
  },
});
