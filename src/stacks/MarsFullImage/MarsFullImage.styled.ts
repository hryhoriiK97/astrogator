import { getRelativeUnits } from "../../utils/getRelativeUnits";
import { StyleSheet } from "react-native";
import { AstrogatorColor } from "../../theming/theme";

const { bp } = getRelativeUnits();

export const styles = StyleSheet.create({
  container: {
    position: "relative",
    backgroundColor: AstrogatorColor.Black,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imageWrapper: {
    width: "100%",
  },
  image: {
    width: "100%",
    height: 370 * bp,
  },
  imageInformation: {
    alignItems: "center",
    marginTop: 10 * bp,
  },
  title: {
    textAlign: "center",
    color: AstrogatorColor.White,
  },
  dateTitle: {
    fontSize: 14 * bp,
    color: AstrogatorColor.White,
  },
  instagramStoriesShareButton: {
    position: "absolute",
    bottom: 20 * bp,
  },
});
