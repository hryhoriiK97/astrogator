import { StyleSheet } from "react-native";
import { AstrogatorColor } from "../../../../theming/theme";
import { getRelativeUnits } from "../../../../utils/getRelativeUnits";
import { scale, verticalScale } from "react-native-size-matters";

const { bp } = getRelativeUnits();

export const styles = StyleSheet.create({
  safeAreaContainer: {
    height: "100%",
  },
  screen: {
    paddingTop: scale(20),
  },
  header: {
    paddingTop: verticalScale(22),
  },
  title: {
    fontSize: 24 * bp,
    color: AstrogatorColor.White,
  },
  infoText: {
    fontSize: 14 * bp,
    color: AstrogatorColor.Silver,
  },
  navigationBar: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  backButton: {
    borderWidth: 1,
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
    paddingHorizontal: scale(16),
  },
});
