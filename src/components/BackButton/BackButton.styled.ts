import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  backButton: {
    position: "absolute",
    top: 0,
    left: 0,
    paddingHorizontal: moderateScale(8),
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    zIndex: 3,
  },
  backButtonTitle: {
    fontSize: scale(14),
    lineHeight: verticalScale(22),
    marginLeft: moderateScale(7),
  },
});
