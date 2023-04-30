import { Raleway } from "../Typography";
import { StyleSheet } from "react-native";
import { AstrogatorColor } from "../../theming/theme";
import { getRelativeUnits } from "../../utils/getRelativeUnits";

const { bp } = getRelativeUnits();

export const styles = StyleSheet.create({
  container: {
    paddingTop: 25 * bp,
    paddingBottom: 20 * bp,
  },
  title: {
    fontSize: 24 * bp,
    color: AstrogatorColor.White,
    lineHeight: 28 * bp,
  },
  subtitle: {
    maxWidth: 259 * bp,
    fontFamily: Raleway.Light,
    fontSize: 14 * bp,
    lineHeight: 19 * bp,
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
    fontSize: 16 * bp,
    fontFamily: Raleway.Medium,
    color: AstrogatorColor.White,
    marginLeft: 4 * bp,
  },
  datePickerWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  datePickerTitle: {
    fontFamily: Raleway.Regular,
    fontSize: 12 * bp,
    color: AstrogatorColor.White,
    lineHeight: 14 * bp,
  },
  datePickerButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 38 * bp,
    height: 40 * bp,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.11)",
    borderRadius: 8 * bp,
    backgroundColor: "rgba(11, 11, 11, 0.33)",
  },
});
