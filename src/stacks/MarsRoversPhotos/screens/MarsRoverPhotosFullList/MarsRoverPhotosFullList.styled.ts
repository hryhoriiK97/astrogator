import { StyleSheet } from "react-native";
import { AstrogatorColor } from "../../../../theming/theme";
import { getRelativeUnits } from "../../../../utils/getRelativeUnits";

const { bp } = getRelativeUnits();

export const styles = StyleSheet.create({
  screen: {
    backgroundColor: AstrogatorColor.White,
  },
  safeAreaContainer: {
    height: "100%",
  },
  marsPhotoItemWrapper: {
    flex: 1,
    margin: 2 * bp,
  },
  marsPhotoItem: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 10 * bp,
  },
  contentContainerStyle: {
    paddingHorizontal: 8 * bp,
  },
});
