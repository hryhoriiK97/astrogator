import { getRelativeUnits } from "../../utils/getRelativeUnits";
import { StyleSheet } from "react-native";
import { AstrogatorColor } from "../../theming/theme";

const { bp } = getRelativeUnits();

export const styles = StyleSheet.create({
  screenView: {
    backgroundColor: AstrogatorColor.Black,
  },
  contentContainerStyle: {
    flex: 1,
    paddingHorizontal: 16 * bp,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20 * bp,
    color: AstrogatorColor.White,
    textAlign: "center",
  },
  reloadButton: {
    backgroundColor: AstrogatorColor.VenetianNights,
    paddingHorizontal: 16 * bp,
    paddingVertical: 7 * bp,
    borderRadius: 8 * bp,
    marginTop: 10 * bp,
  },
});
