import { getRelativeUnits } from "../../utils/getRelativeUnits";
import { StyleSheet } from "react-native";
import { AstrogatorColor } from "../../theming/theme";
import { scale } from "react-native-size-matters";

const { bp } = getRelativeUnits();

export const styles = StyleSheet.create({
  container: {
    position: "relative",
    backgroundColor: AstrogatorColor.Black,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  safeAreaView: {
    width: "100%",
    height: "100%",
    backgroundColor: AstrogatorColor.Black,
  },
  backButton: {
    alignItems: "center",
    justifyContent: "center",
    width: scale(50),
    height: scale(50),
    borderRadius: scale(4),
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
