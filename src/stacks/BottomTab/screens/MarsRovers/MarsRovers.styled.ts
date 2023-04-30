import { getRelativeUnits } from "../../../../utils/getRelativeUnits";
import { StyleSheet } from "react-native";
import { AstrogatorColor } from "../../../../theming/theme";

const { bp } = getRelativeUnits();

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24 * bp,
    // backgroundColor: AstrogatorColor.Black,
  },
  contentContainerStyle: {
    marginHorizontal: 16 * bp,
  },
  backgroundImage: {
    position: "relative",
    backgroundColor: AstrogatorColor.Black,
    width: "100%",
    height: "100%",
  },
  imageStyle: {
    width: "100%",
    height: "100%",
  },
  backdropWrapper: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.45)",
  },
  title: {
    fontSize: 34 * bp,
    color: AstrogatorColor.White,
    marginBottom: 16 * bp,
    paddingLeft: 16 * bp,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "red",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});
