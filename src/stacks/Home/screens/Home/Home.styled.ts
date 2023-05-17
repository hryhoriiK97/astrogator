import { StyleSheet } from "react-native";
import {
  moderateScale,
  moderateVerticalScale,
  verticalScale,
} from "react-native-size-matters";
import { AstrogatorColor } from "../../../../theming/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: verticalScale(24),
    paddingHorizontal: verticalScale(16),
  },
  backgroundImage: {
    position: "relative",
    backgroundColor: AstrogatorColor.Black,
    width: "100%",
    height: "100%",
  },
  imageStyle: {
    width: "100%",
    height: "100%",
  },
  backdropWrapper: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.45)",
  },
});
