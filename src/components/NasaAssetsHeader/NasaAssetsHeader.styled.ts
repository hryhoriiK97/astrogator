import { StyleSheet } from "react-native";

export const NASA_ASSETS_HEADER_HEIGHT = 100;

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 1000,
    height: NASA_ASSETS_HEADER_HEIGHT,
    backgroundColor: "blue",
  },
});
