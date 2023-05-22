import { StyleSheet } from "react-native";
import { AstrogatorColor } from "../../theming/theme";
import { scale } from "react-native-size-matters";

export const styles = StyleSheet.create({
  actionButtonsWrapper: {
    flexDirection: "row",
  },
  button: {
    backgroundColor: AstrogatorColor.Black,
    width: scale(40),
    height: scale(40),
    borderWidth: 2,
    borderColor: AstrogatorColor.VenetianNights,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: scale(4),
  },
});
