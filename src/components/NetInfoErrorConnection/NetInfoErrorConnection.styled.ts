import { getRelativeUnits } from "../../utils/getRelativeUnits";
import { StyleSheet } from "react-native";
import { AstrogatorColor } from "../../theming/theme";
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from "react-native-size-matters";

const { bp } = getRelativeUnits();

export const styles = StyleSheet.create({
  screenView: {
    flex: 1,
    justifyContent: "flex-end",
    paddingVertical: moderateVerticalScale(30),
  },
  safeAreaView: {
    flex: 1,
    height: "100%",
  },
  image: {
    position: "absolute",
    top: moderateVerticalScale(125),
    left: 0,
    width: "100%",
    height: moderateVerticalScale(300),
    zIndex: -1,
  },
  mask: {
    position: "absolute",
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 0,
  },
  contentWrapper: {
    width: "100%",
    paddingBottom: moderateVerticalScale(30),
    paddingHorizontal: moderateScale(16),
    zIndex: 0,
  },
  textWrapper: {
    alignItems: "flex-start",
  },
  title: {
    fontSize: scale(32),
    lineHeight: moderateVerticalScale(35),
    color: AstrogatorColor.White,
  },
  subtitle: {
    fontSize: scale(14),
    lineHeight: moderateVerticalScale(20),
    color: AstrogatorColor.Gray,
  },
  reloadButton: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    height: moderateVerticalScale(50),
    justifyContent: "center",
    backgroundColor: AstrogatorColor.VenetianNights,
    paddingVertical: moderateVerticalScale(15),
    borderRadius: 4 * bp,
    marginTop: 10 * bp,
  },
  reloadButtonTitle: {
    fontSize: moderateScale(20),
    lineHeight: moderateVerticalScale(20),
  },
});
