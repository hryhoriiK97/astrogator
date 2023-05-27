import { StyleSheet } from "react-native";
import { AstrogatorColor } from "../../theming/theme";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: moderateVerticalScale(200),
    borderWidth: 2,
    justifyContent: "space-between",
    borderColor: AstrogatorColor.VenetianNights,
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateVerticalScale(20),
    backgroundColor: "rgba(0,0,0,0.45)",
    borderRadius: 4,
  },
  blurView: {
    width: "100%",
  },
  title: {
    fontSize: moderateScale(26),
    color: AstrogatorColor.White,
  },
  subtitle: {
    fontSize: moderateScale(15),
    color: AstrogatorColor.Gray,
  },
  refreshButton: {
    width: "100%",
    borderRadius: 4,
    height: moderateVerticalScale(45),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: AstrogatorColor.VenetianNights,
  },
  refreshButtonTitle: {
    fontSize: moderateScale(14),
    color: AstrogatorColor.White,
  },
});
