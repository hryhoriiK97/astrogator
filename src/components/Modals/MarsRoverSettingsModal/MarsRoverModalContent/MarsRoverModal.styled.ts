import { AstrogatorColor } from "../../../../theming/theme";
import { getRelativeUnits } from "../../../../utils/getRelativeUnits";
import { StyleSheet } from "react-native";
import { Raleway } from "../../../Typography";

const { bp } = getRelativeUnits();

export const styles = StyleSheet.create({
  container: {
    height: "100%",
    padding: 20 * bp,
  },
  title: {
    fontSize: 20 * bp,
    marginBottom: 10 * bp,
  },
  rowWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  statusTitle: {
    textTransform: "capitalize",
    marginLeft: 5 * bp,
  },
  roverInfoText: {
    fontSize: 13 * bp,
    marginBottom: 5 * bp,
  },
  flashListHeight: {
    height: 200 * bp,
  },
  exploreButton: {
    width: "100%",
    height: 50 * bp,
    borderRadius: 15 * bp,
    borderColor: AstrogatorColor.VenetianNights,
    borderWidth: 2 * bp,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "auto",
    marginBottom: 50 * bp,
  },
  exploreTitle: {
    fontSize: 20 * bp,
    color: AstrogatorColor.White,
    fontFamily: Raleway.Bold,
  },
});
