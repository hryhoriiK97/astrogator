import { StyleSheet } from "react-native";
import { getRelativeUnits } from "../../utils/getRelativeUnits";

const { bp } = getRelativeUnits();

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    paddingTop: 24 * bp,
  },
});
