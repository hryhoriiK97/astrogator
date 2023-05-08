import { StyleSheet } from "react-native";

export const styles = (backgroundColor: string) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: backgroundColor,
      alignItems: "center",
      justifyContent: "center",
    },
  });
