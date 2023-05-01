import { Dimensions, StyleSheet } from "react-native";
import { AstrogatorColor } from "../../theming/theme";
import { getRelativeUnits } from "../../utils/getRelativeUnits";

const { width } = Dimensions.get("screen");

const { bp } = getRelativeUnits();

export const styles = StyleSheet.create({
  headerWrapper: {
    position: "absolute",
    top: 50 * bp,
    width: "100%",
  },
  header: {
    position: "absolute",
    top: 50 * bp,
    left: 0,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10000,
  },
  headerInnerWrapper: {
    width: width * 0.5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30 * bp,
    height: 60 * bp,
    backgroundColor: AstrogatorColor.White,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: 16,
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
