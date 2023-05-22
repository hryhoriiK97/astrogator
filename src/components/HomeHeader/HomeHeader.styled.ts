import { Raleway } from "../Typography";
import { StyleSheet } from "react-native";
import { AstrogatorColor } from "../../theming/theme";
import { scale, verticalScale } from "react-native-size-matters";

export const styles = StyleSheet.create({
  container: {
    paddingTop: verticalScale(48),
    paddingBottom: verticalScale(20),
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
  homeHeaderActionsWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  latestUpdatesTitleWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  latestUpdatesTitle: {
    fontSize: scale(16),
    fontFamily: Raleway.Medium,
    color: AstrogatorColor.White,
    marginLeft: scale(4),
  },
  datePickerWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  datePickerTitle: {
    fontFamily: Raleway.Regular,
    fontSize: scale(12),
    color: AstrogatorColor.White,
    lineHeight: scale(14),
  },
  datePickerButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: scale(38),
    height: verticalScale(40),
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.11)",
    borderRadius: scale(8),
    backgroundColor: "rgba(11, 11, 11, 0.33)",
  },
});
