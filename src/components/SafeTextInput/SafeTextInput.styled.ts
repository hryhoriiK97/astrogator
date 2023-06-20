import { StyleSheet } from "react-native";
import { getRelativeUnits } from "../../utils/getRelativeUnits";
import { Raleway } from "../Typography";
import { moderateVerticalScale } from "react-native-size-matters";

const { bp } = getRelativeUnits();

export const styles = StyleSheet.create({
  container: {
    height: 80 * bp,
    justifyContent: "space-between",
  },
  errorText: {
    fontSize: moderateVerticalScale(13),
    color: "#D10000",
  },
  input: {
    width: "100%",
    height: moderateVerticalScale(50),
    padding: 5 * bp,
    marginTop: moderateVerticalScale(8),
    fontSize: moderateVerticalScale(14),
    fontFamily: Raleway.Bold,
    color: "#000000",
    textAlign: "center",
    borderRadius: 10 * bp,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
});
