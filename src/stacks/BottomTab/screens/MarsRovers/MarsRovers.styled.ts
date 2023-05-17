import { StyleSheet } from "react-native";
import { AstrogatorColor } from "../../../../theming/theme";
import { Raleway } from "../../../../components";
import { scale, verticalScale } from "react-native-size-matters";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: verticalScale(48),
  },
  contentContainerStyle: {
    marginHorizontal: scale(16),
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
  header: {
    paddingLeft: scale(16),
  },
  title: {
    fontSize: scale(24),
    color: AstrogatorColor.White,
    lineHeight: verticalScale(28),
  },
  subtitle: {
    maxWidth: scale(259),
    fontFamily: Raleway.Light,
    fontSize: scale(14),
    lineHeight: verticalScale(19),
    color: AstrogatorColor.Silver,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "red",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});
