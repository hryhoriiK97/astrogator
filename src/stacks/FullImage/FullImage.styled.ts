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
    height: 500 * bp,
  },
  title: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: AstrogatorColor.White,
  },
  instagramStoriesShareButton: {
    position: "absolute",
    bottom: 40 * bp,
  },
});
