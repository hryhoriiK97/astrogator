import { StyleSheet } from "react-native";
import { getRelativeUnits } from "../../utils/getRelativeUnits";

const { bp } = getRelativeUnits();

export const styles = ({ height = 50 }: { height?: number }) =>
  StyleSheet.create({
    container: {
      height: height * bp,
      alignItems: "center",
      justifyContent: "center",
    },
  });
