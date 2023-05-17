import { StyleSheet } from "react-native";
import { CARD_HEIGHT, CARD_WIDTH } from "./MarsRoverCard.utils";
import { getRelativeUnits } from "../../../utils/getRelativeUnits";
import { AstrogatorColor } from "../../../theming/theme";
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from "react-native-size-matters";

const { bp } = getRelativeUnits();

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    position: "relative",
    backgroundColor: AstrogatorColor.Transparent,
    borderRadius: 8 * bp,
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderWidth: 2,
    borderColor: "rgba(255, 255, 255, 0.11)",
    borderStyle: "solid",
  },
  image: {
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    borderRadius: 8 * bp,
    paddingHorizontal: moderateScale(16),
    paddingVertical: moderateVerticalScale(20),
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  marsRoverNameWrapper: {
    backgroundColor: "rgba(11, 11, 11, 0.66)",
    borderRadius: 4 * bp,
    padding: moderateScale(6),
  },
  marsRoverName: {
    fontSize: scale(14),
    color: AstrogatorColor.White,
  },
  addToFavouritesButton: {
    backgroundColor: "rgba(11, 11, 11, 0.66)",
    padding: scale(6),
    borderRadius: 4 * bp,
  },
  wrapper: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  marsInfoWrapper: {
    backgroundColor: "rgba(11, 11, 11, 0.66)",
    padding: moderateScale(6),
    borderRadius: 4 * bp,
  },
  detailsText: {
    fontSize: moderateScale(12),
    color: AstrogatorColor.White,
  },
  statusText: {
    textTransform: "capitalize",
    marginLeft: moderateScale(6),
  },
  buttonsWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    width: "50%",
    paddingVertical: moderateVerticalScale(12),
    paddingHorizontal: moderateScale(15),
    borderRadius: 4 * bp,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.11)",
  },
  purpleButton: {
    backgroundColor: "rgba(114, 79, 255, 0.75)",
  },
  buttonTitle: {
    fontSize: moderateScale(16),
    color: AstrogatorColor.White,
  },
});
