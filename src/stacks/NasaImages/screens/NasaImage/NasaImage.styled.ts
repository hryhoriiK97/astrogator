import { Platform, StyleSheet } from "react-native";
import { AstrogatorColor } from "../../../../theming/theme";
import { getRelativeUnits } from "../../../../utils/getRelativeUnits";
import { MobilePlatform } from "../../../../enums/MobilePlatform";
import { Raleway } from "../../../../components/Typography";
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from "react-native-size-matters";

const { bp } = getRelativeUnits();

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AstrogatorColor.Black,
    paddingTop: verticalScale(40),
  },
  apodHeader: {
    height: verticalScale(40),
  },
  contentContainerStyle: {
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(16),
  },
  image: {
    width: "100%",
    height: moderateVerticalScale(219),
    borderRadius: 8 * bp,
  },
  imageWrapper: {
    position: "relative",
  },
  subheader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  subheaderText: {
    color: AstrogatorColor.Silver,
    fontSize: moderateScale(14),
    fontFamily: Raleway.Light,
    lineHeight: 16 * bp,
  },
  imageInfoWrapper: {
    marginBottom: 10 * bp,
  },
  title: {
    fontSize: scale(25),
    marginTop: moderateVerticalScale(30),
    marginBottom: moderateVerticalScale(20),
    color: AstrogatorColor.White,
  },
  explanation: {
    display: "flex",
    alignItems: "center",
    fontFamily: Raleway.Medium,
    color: AstrogatorColor.White,
    fontSize: 14 * bp,
    lineHeight: 21 * bp,
    marginTop: moderateVerticalScale(20),
  },
  readMoreButton: {
    alignSelf: "center",
    paddingLeft: moderateScale(5),
    fontFamily: Raleway.Medium,
    color: AstrogatorColor.VenetianNights,
  },
});
