import { StyleSheet } from "react-native";
import { AstrogatorColor } from "../../theming/theme";
import { getRelativeUnits } from "../../utils/getRelativeUnits";
import { Raleway } from "../Typography";
import { scale, verticalScale } from "react-native-size-matters";

const { bp } = getRelativeUnits();

export const styles = StyleSheet.create({
  dropdown: {
    height: verticalScale(45),
    borderColor: AstrogatorColor.VenetianNights,
    borderWidth: 2 * bp,
    borderRadius: 8 * bp,
    paddingHorizontal: 8 * bp,
    backgroundColor: "white",
  },
  icon: {
    marginRight: 5 * bp,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    borderRadius: 15 * bp,
    left: 22 * bp,
    top: 8 * bp,
    zIndex: 999,
    paddingHorizontal: scale(8),
    fontSize: 14 * bp,
  },
  textStyle: {
    fontSize: scale(16),
    fontFamily: Raleway.Bold,
  },
  iconStyle: {
    width: scale(20),
    height: scale(20),
  },
  inputSearchStyle: {
    height: verticalScale(40),
    fontSize: scale(16),
    borderColor: AstrogatorColor.VenetianNights,
    borderRadius: 5 * bp,
  },
  dropdownContainer: {
    marginTop: verticalScale(15),
    height: verticalScale(150),
  },
});
