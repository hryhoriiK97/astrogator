import { StyleSheet } from "react-native";
import { verticalScale } from "react-native-size-matters";

export const styles = ({ height = 50 }: { height?: number }) =>
  StyleSheet.create({
    container: {
      height: verticalScale(height),
      alignItems: "center",
      justifyContent: "center",
    },
  });
