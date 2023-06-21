import { StyleSheet } from "react-native";
import { AstrogatorColor } from "../../theming/theme";
import { scale, verticalScale } from "react-native-size-matters";

export const styles = StyleSheet.create({
  container: {
    position: "relative",
    backgroundColor: AstrogatorColor.Black,
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  safeAreaView: {
    width: "100%",
    height: "100%",
    backgroundColor: AstrogatorColor.Black,
  },
  backButton: {
    alignItems: "center",
    justifyContent: "center",
    width: scale(50),
    height: scale(50),
    borderRadius: scale(4),
  },
  imageWrapper: {
    width: "100%",
  },
  image: {
    width: "100%",
    height: verticalScale(320),
  },
  title: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: AstrogatorColor.White,
  },
});
