import { getRelativeUnits } from "../../../../utils/getRelativeUnits";
import { StyleSheet } from "react-native";
import { AstrogatorColor } from "../../../../theming/theme";
import { Raleway } from "../../../../components";

const { bp } = getRelativeUnits();

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24 * bp,
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
  header: {
    paddingTop: 24 * bp,
    paddingLeft: 16 * bp,
  },
  title: {
    fontSize: 24 * bp,
    color: AstrogatorColor.White,
    lineHeight: 28 * bp,
  },
  subtitle: {
    maxWidth: 259 * bp,
    fontFamily: Raleway.Light,
    fontSize: 14 * bp,
    lineHeight: 19 * bp,
    color: AstrogatorColor.Silver,
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
