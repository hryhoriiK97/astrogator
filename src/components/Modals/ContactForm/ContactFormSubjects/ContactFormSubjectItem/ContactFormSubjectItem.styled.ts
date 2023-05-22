import { StyleSheet } from "react-native";
import { getRelativeUnits } from "../../../../../utils/getRelativeUnits";
import { AstrogatorColor } from "../../../../../theming/theme";
import { moderateScale } from "react-native-size-matters";

const { bp } = getRelativeUnits();

enum StyleItem {
  Container = "container",
  Checkbox = "checkbox",
  CheckboxIndicator = "checkboxIndicator",
  title = "title",
}

export const styles = (
  isActive?: boolean
): StyleSheet.NamedStyles<{ [style in StyleItem]: {} }> =>
  StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    checkbox: {
      width: 18 * bp,
      height: 18 * bp,
      borderRadius: 2 * bp,
      borderWidth: 2 * bp,
      borderStyle: "solid",
      borderColor: AstrogatorColor.White,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginRight: 20 * bp,
    },
    checkboxIndicator: {
      width: 8 * bp,
      height: 8 * bp,
      opacity: isActive ? 1 : 0,
      borderRadius: 1,
      backgroundColor: AstrogatorColor.VenetianNights,
    },
    title: {
      fontSize: moderateScale(14),
      color: AstrogatorColor.White,
    },
  });
