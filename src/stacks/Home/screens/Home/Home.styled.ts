import { StyleSheet } from "react-native";
import { verticalScale } from "react-native-size-matters";

export const styles = (isError?: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: verticalScale(16),
    },
    flatListStyle: {
      height: isError ? "100%" : undefined,
    },
    contentContainerStyle: {
      flex: isError ? 1 : undefined,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  });
