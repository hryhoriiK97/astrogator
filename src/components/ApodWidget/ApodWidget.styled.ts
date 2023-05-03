import { StyleSheet } from "react-native";
import { getRelativeUnits } from "../../utils/getRelativeUnits";

const { bp } = getRelativeUnits();

export const styles = StyleSheet.create({
  apodWidgetContainer: {
    position: "relative",
    width: "100%",
    flexDirection: "row",
    height: 200 * bp,
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
    paddingHorizontal: 16 * bp,
    paddingTop: 20 * bp,
    paddingBottom: 29 * bp,
    borderRadius: 8 * bp,
  },
  titleWrapper: {
    width: "auto",
    alignSelf: "flex-start",
    padding: 6 * bp,
    backgroundColor: "rgba(11, 11, 11, 0.66)",
    borderRadius: 4 * bp,
  },
  title: {
    fontSize: 14 * bp,
    color: "#ffffff",
  },
  apodInfoWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dateAuthorInfo: {
    maxWidth: 250 * bp,
    padding: 6 * bp,
    backgroundColor: "rgba(11, 11, 11, 0.66)",
  },
  infoTitle: {
    fontSize: 12 * bp,
    color: "#ffffff",
  },
  moreInfoButton: {
    width: 34 * bp,
    height: 34 * bp,
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
