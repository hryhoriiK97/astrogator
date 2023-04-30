import { Dimensions, StyleSheet } from "react-native";
import { getRelativeUnits } from "../../utils/getRelativeUnits";

const { bp } = getRelativeUnits();

const { width } = Dimensions.get("screen");

const ITEM_WIDTH = width * 0.76;
const ITEM_HEIGHT = ITEM_WIDTH * 1.47;

export const styles = StyleSheet.create({
  container: {
    width: width,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  outerWrapper: {
    borderRadius: 18,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.6,
    shadowRadius: 30,
    padding: 12,
    backgroundColor: "white",
  },
  innerWrapper: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    overflow: "hidden",
    alignItems: "center",
    borderRadius: 14,
  },
  title: {
    width: "50%",
    textAlign: "center",
    fontSize: 20 * bp,
  },
  image: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    resizeMode: "cover",
    borderTopRightRadius: 5 * bp,
    borderBottomRightRadius: 5 * bp,
  },
  avatar: {
    width: 60 * bp,
    height: 60 * bp,
    borderRadius: 60,
    resizeMode: "cover",
    borderWidth: 6 * bp,
    borderColor: "white",
    position: "absolute",
    bottom: 150 * bp,
    right: 60 * bp,
  },
});
