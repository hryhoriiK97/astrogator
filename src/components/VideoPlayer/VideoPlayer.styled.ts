import { MobilePlatform } from "./../../enums/MobilePlatform";
import { getRelativeUnits } from "../../utils/getRelativeUnits";
import { Platform, StyleSheet } from "react-native";

const { bp } = getRelativeUnits();

export default StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#000000",
  },
  contentContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  activityIndicator: {
    position: "absolute",
    color: "#FFFFFF",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  errorHeading: {
    fontSize: 16 * bp,
    color: "#FFFFFF",
    marginBottom: 8 * bp,
  },
  subText: {
    fontSize: 14 * bp,
    color: "#FFFFFF",
    marginBottom: 32 * bp,
  },
  goBackButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12 * bp,
    borderWidth: 2,
    borderColor: "#FFFFFF",
  },
  goBackButtonWrapper: {
    zIndex: 100,
    top: Platform.OS === MobilePlatform.IOS ? 55 : 70,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    width: "100%",
    left: 0,
  },
  goBackButton: {
    zIndex: 100,
    top: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    height: 50 * bp,
  },
  goBackText: {
    fontSize: 17 * bp,
    color: "#FFFFFF",
    marginLeft: 10 * bp,
  },
  video: {
    height: "100%",
    width: "100%",
  },
});
