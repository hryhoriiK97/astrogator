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
  header: {
    paddingLeft: verticalScale(16),
  },
  title: {
    fontSize: scale(24),
    color: AstrogatorColor.White,
    lineHeight: scale(28),
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
