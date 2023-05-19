import { StyleSheet } from "react-native";
import { AstrogatorColor } from "../../../../theming/theme";
import { scale, verticalScale } from "react-native-size-matters";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AstrogatorColor.Black,
  },
  contentContainerStyle: {
    backgroundColor: AstrogatorColor.Transparent,
    paddingVertical: verticalScale(20),
    paddingHorizontal: scale(8),
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
