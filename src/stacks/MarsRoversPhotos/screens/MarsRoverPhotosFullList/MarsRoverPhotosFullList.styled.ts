import { StyleSheet } from "react-native";
import { AstrogatorColor } from "../../../../theming/theme";
import { getRelativeUnits } from "../../../../utils/getRelativeUnits";
import { scale, verticalScale } from "react-native-size-matters";

const { bp } = getRelativeUnits();

export const styles = StyleSheet.create({
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
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.45)",
  },
  safeAreaContainer: {
    height: "100%",
  },
  header: {
    paddingTop: verticalScale(48),
    paddingHorizontal: scale(8),
    paddingBottom: verticalScale(40),
  },
  title: {
    fontSize: 24 * bp,
    color: AstrogatorColor.White,
  },
  roverName: {
    fontSize: 14 * bp,
    color: AstrogatorColor.White,
  },
  marsPhotoItemWrapper: {
    flex: 1,
    margin: 2 * bp,
  },
  marsPhotoItem: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 8 * bp,
  },
  contentContainerStyle: {
    paddingHorizontal: scale(8),
  },
});
