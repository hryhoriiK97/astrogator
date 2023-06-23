import { Dimensions, StyleSheet } from "react-native";
import { getRelativeUnits } from "../../utils/getRelativeUnits";
import { AstrogatorColor } from "../../theming/theme";
import { moderateVerticalScale } from "react-native-size-matters";

const { bp } = getRelativeUnits();

const { width } = Dimensions.get("screen");

export const ITEM_WIDTH = width * 0.86;
export const ITEM_HEIGHT = moderateVerticalScale(ITEM_WIDTH * 1.4);

export const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: width,
    height: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  roverNameWrapper: {
    maxWidth: 200 * bp,
    alignItems: "center",
    justifyContent: "center",
  },
  roverName: {
    fontSize: 16 * bp,
  },
  cameraInfo: {
    fontSize: 12 * bp,
    textAlign: "center",
  },
  outerWrapper: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8 * bp,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.6,
    shadowRadius: 30,
  },
  innerWrapper: {
    position: "relative",
    alignSelf: "center",
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    overflow: "hidden",
    alignItems: "center",
    borderRadius: 8 * bp,
    borderWidth: 2,
    borderColor: "rgba(255, 255, 255, 0.11)",
    borderStyle: "solid",
  },
  image: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    resizeMode: "cover",
    borderRadius: 8 * bp,
  },
  headerButton: {
    width: 40 * bp,
    height: 40 * bp,
    borderRadius: 40 * bp,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: AstrogatorColor.White,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
});
