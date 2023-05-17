import { getRelativeUnits } from "../../utils/getRelativeUnits";
import { StyleSheet } from "react-native";
import { AstrogatorColor } from "../../theming/theme";
import { scale, verticalScale } from "react-native-size-matters";

const { bp } = getRelativeUnits();

export const styles = StyleSheet.create({
  container: {
    padding: scale(16),
  },
  title: {
    fontSize: scale(20),
    color: AstrogatorColor.White,
  },
  imageInfoWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10 * bp,
  },
  imageInfoText: {
    maxWidth: scale(200),
    fontSize: scale(10),
    color: AstrogatorColor.White,
  },
  description: {
    fontSize: scale(14),
    color: AstrogatorColor.White,
  },
  keywordsWrapper: {
    width: "100%",
    marginTop: verticalScale(20),
    flexDirection: "row",
    flexWrap: "wrap",
  },
  keywordItem: {
    padding: scale(5),
    borderRadius: 3 * bp,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: AstrogatorColor.VenetianNights,
  },
  keywordItemText: {
    fontSize: scale(12),
    color: AstrogatorColor.White,
  },
});
