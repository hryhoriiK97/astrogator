import { StyleSheet } from "react-native";
import { getRelativeUnits } from "../../utils/getRelativeUnits";

const { bp } = getRelativeUnits();

export const styles = StyleSheet.create({
  imageWrapper: {
    width: "100%",
  },
  image: {
    width: "100%",
    height: 300 * bp,
  },
  imageInfoWrapper: {
    marginBottom: 30 * bp,
  },
});
