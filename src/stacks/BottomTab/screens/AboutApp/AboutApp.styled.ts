import { Dimensions, StyleSheet } from "react-native";
import { AstrogatorColor } from "../../../../theming/theme";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";

const height = Dimensions.get("screen").height;

export const styles = StyleSheet.create({
  screenView: {
    flex: 1,
    backgroundColor: AstrogatorColor.Black,
  },
  safeAreaView: {
    flex: 1,
    position: "relative",
  },
  logoShuttle: {
    position: "absolute",
    top: height < 700 ? 95 : 125,
    left: 0,
    zIndex: 0,
  },
  mask: {
    position: "absolute",
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 0,
  },
  screen: {
    flex: 1,
    paddingTop: moderateVerticalScale(15),
    paddingBottom: moderateVerticalScale(40),
    paddingHorizontal: moderateScale(16),
    justifyContent: "space-between",
  },
  title: {
    fontSize: moderateScale(24),
    lineHeight: moderateVerticalScale(30),
    color: AstrogatorColor.White,
  },
  bottomContent: {
    zIndex: 100,
  },
  subtitle: {
    fontSize: moderateScale(14),
    lineHeight: moderateVerticalScale(18),
    color: AstrogatorColor.White,
  },
  text: {
    fontSize: moderateScale(14),
    lineHeight: moderateVerticalScale(19),
    color: AstrogatorColor.Silver,
  },
  reviewButton: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: moderateVerticalScale(50),
    backgroundColor: "#724FFF",
    borderRadius: 8,
  },
  contactButton: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: moderateVerticalScale(50),
    backgroundColor: "rgba(255, 255, 255, 0.11)",
    borderRadius: 8,
  },
  buttonTitle: {
    fontSize: moderateScale(16),
    lineHeight: moderateVerticalScale(20),
    color: AstrogatorColor.White,
  },
});
