import { AstrogatorColor } from "../../../../theming/theme";
import { getRelativeUnits } from "../../../../utils/getRelativeUnits";
import { StyleSheet } from "react-native";
import { Raleway } from "../../../Typography";
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from "react-native-size-matters";

const { bp } = getRelativeUnits();

export const styles = StyleSheet.create({
  container: {
    height: "100%",
    padding: scale(20),
  },
  title: {
    fontSize: scale(20),
    marginBottom: moderateVerticalScale(10),
  },
  rowWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  statusTitle: {
    textTransform: "capitalize",
    marginLeft: moderateScale(5),
  },
  roverInfoText: {
    fontSize: scale(13),
    marginBottom: moderateVerticalScale(5),
  },
  exploreButton: {
    width: "100%",
    height: moderateVerticalScale(50),
    borderRadius: 8 * bp,
    borderColor: AstrogatorColor.VenetianNights,
    borderWidth: 2 * bp,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "auto",
    marginBottom: moderateVerticalScale(50),
  },
  exploreTitle: {
    fontSize: moderateScale(20),
    color: AstrogatorColor.White,
    fontFamily: Raleway.Bold,
  },
});
