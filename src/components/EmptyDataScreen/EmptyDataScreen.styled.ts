import { StyleSheet } from "react-native";
import { AstrogatorColor } from "../../theming/theme";
import { verticalScale } from "react-native-size-matters";

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    color: AstrogatorColor.White,
    textAlign: "center",
    marginBottom: verticalScale(30),
  },
});
