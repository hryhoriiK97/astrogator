import { StyleSheet } from "react-native";
import { CARD_HEIGHT, CARD_WIDTH } from "./MarsRoverCard.utils";
import { getRelativeUnits } from "../../../utils/getRelativeUnits";
import { AstrogatorColor } from "../../../theming/theme";

const { bp } = getRelativeUnits();

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    position: "relative",
    backgroundColor: "white",
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
    borderWidth: 1,
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
    paddingHorizontal: 16 * bp,
    paddingVertical: 20 * bp,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  marsRoverNameWrapper: {
    backgroundColor: "rgba(11, 11, 11, 0.66)",
    borderRadius: 4 * bp,
    padding: 6 * bp,
  },
  marsRoverName: {
    fontSize: 14 * bp,
    color: AstrogatorColor.White,
  },
  addToFavouritesButton: {
    backgroundColor: "rgba(11, 11, 11, 0.66)",
    padding: 6 * bp,
    borderRadius: 4 * bp,
  },
  wrapper: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  marsInfoWrapper: {
    backgroundColor: "rgba(11, 11, 11, 0.66)",
    padding: 6 * bp,
    borderRadius: 4 * bp,
  },
  detailsText: {
    fontSize: 12 * bp,
    color: AstrogatorColor.White,
  },
  statusText: {
    textTransform: "capitalize",
    marginLeft: 5 * bp,
  },
  buttonsWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    width: "50%",
    paddingVertical: 12 * bp,
    paddingHorizontal: 15 * bp,
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
    fontSize: 16 * bp,
    color: AstrogatorColor.White,
  },
});
