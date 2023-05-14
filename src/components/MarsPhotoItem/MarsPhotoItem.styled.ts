import { Dimensions, StyleSheet } from "react-native";
import { getRelativeUnits } from "../../utils/getRelativeUnits";
import { AstrogatorColor } from "../../theming/theme";

const { bp } = getRelativeUnits();

const { width } = Dimensions.get("screen");

export const ITEM_WIDTH = width * 0.76;
export const ITEM_HEIGHT = ITEM_WIDTH * 1.57;

export const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: width,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    width: ITEM_WIDTH + 40 * bp,
    flexDirection: "row",
    paddingVertical: 15 * bp,
    paddingHorizontal: 10 * bp,
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: ITEM_WIDTH + (40 * bp) / 2,
    backgroundColor: AstrogatorColor.White,
    shadowColor: AstrogatorColor.Black,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: 16,
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
  avatarWrapper: {
    position: "absolute",
    bottom: (ITEM_HEIGHT / 14) * bp,
    right: 60 * bp,
  },
  avatar: {
    width: 60 * bp,
    height: 60 * bp,
    borderRadius: 60,
    resizeMode: "cover",
    borderWidth: 6 * bp,
    borderColor: "white",
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
