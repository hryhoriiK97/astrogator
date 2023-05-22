import { StyleSheet } from "react-native";
import { getRelativeUnits } from "../../utils/getRelativeUnits";
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from "react-native-size-matters";

const { bp } = getRelativeUnits();

export const styles = StyleSheet.create({
  apodWidgetContainer: {
    position: "relative",
    width: "100%",
    flexDirection: "row",
    height: scale(200),
    borderWidth: 2,
    borderColor: "rgba(255, 255, 255, 0.11)",
    borderStyle: "solid",
    borderRadius: 8 * bp,
  },
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    borderRadius: 8 * bp,
  },
  innerWrapper: {
    display: "flex",
    justifyContent: "space-between",
    flex: 1,
    paddingHorizontal: scale(16),
    paddingTop: verticalScale(20),
    paddingBottom: verticalScale(29),
    borderRadius: 8 * bp,
  },
  titleWrapper: {
    width: "auto",
    alignSelf: "flex-start",
    padding: scale(6),
    backgroundColor: "rgba(11, 11, 11, 0.66)",
    borderRadius: 4 * bp,
  },
  title: {
    fontSize: scale(14),
    color: "#ffffff",
  },
  apodInfoWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dateAuthorInfo: {
    maxWidth: scale(250),
    padding: scale(6),
    backgroundColor: "rgba(11, 11, 11, 0.66)",
  },
  infoTitle: {
    fontSize: scale(12),
    color: "#ffffff",
  },
  moreInfoButton: {
    width: moderateScale(34),
    height: moderateVerticalScale(34),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8 * bp,
    backgroundColor: "rgba(0, 0, 0, 0.66)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(203, 203, 203, 0.22)",
  },
});
