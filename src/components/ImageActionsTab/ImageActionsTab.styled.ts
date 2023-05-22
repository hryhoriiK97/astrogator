import { getRelativeUnits } from "../../utils/getRelativeUnits";
import { StyleSheet } from "react-native";
import { AstrogatorColor } from "../../theming/theme";
import { scale } from "react-native-size-matters";

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
    width: scale(40),
    height: scale(40),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: scale(40 / 2),
  },
});
