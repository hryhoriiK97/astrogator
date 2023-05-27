import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { StyleSheet } from "react-native";
import { AstrogatorColor } from "../../theming/theme";
import { getRelativeUnits } from "../../utils/getRelativeUnits";

const { bp } = getRelativeUnits();

export const styles = StyleSheet.create({
  header: {
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    background: "red",
    paddingHorizontal: scale(16),
  },
  title: {
    width: "50%",
    fontSize: scale(24),
    color: AstrogatorColor.White,
    lineHeight: verticalScale(28),
  },
  subtitle: {
    fontSize: moderateScale(14),
    lineHeight: verticalScale(19),
    color: AstrogatorColor.Silver,
  },
  navigationBar: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  backButtonContainer: {
    width: moderateScale(34),
    height: moderateScale(34),
    borderWidth: 1,
    borderColor: "rgba(203, 203, 203, 0.22)",
    borderStyle: "solid",
    borderRadius: 8 * bp,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: AstrogatorColor.Black,
  },
  datePickerWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  datePickerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 8 * bp,
    width: moderateScale(109),
    padding: moderateScale(8),
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.11)",
    backgroundColor: "rgba(255, 255, 255, 0.11)",
    borderStyle: "solid",
  },
  datePickerText: {
    fontSize: scale(12),
    color: AstrogatorColor.White,
  },
  fullListButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8 * bp,
    width: moderateScale(34),
    height: moderateScale(36),
    padding: moderateScale(8),
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.11)",
    backgroundColor: "rgba(255, 255, 255, 0.11)",
    borderStyle: "solid",
  },
});
