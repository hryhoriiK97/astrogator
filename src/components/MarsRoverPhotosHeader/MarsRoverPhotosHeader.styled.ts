import { getRelativeUnits } from "../../utils/getRelativeUnits";
import { StyleSheet } from "react-native";
import { AstrogatorColor } from "../../theming/theme";

export enum Status {
  Active = "active",
  Complete = "complete",
}

const { bp } = getRelativeUnits();

export const styles = (status?: Status) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    backgroundImage: {
      width: "100%",
      height: "100%",
    },
    imageWrapper: {
      position: "relative",
    },
    roverImage: {
      width: "100%",
      height: 300 * bp,
    },
    roverInformationWrapper: {
      position: "relative",
      width: "90%",
      alignSelf: "center",
      borderRadius: 5 * bp,
      marginTop: 30 * bp,
      padding: 20 * bp,
      marginVertical: 20 * bp,
    },
    roverNameWrapper: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    roverName: {
      marginBottom: 10 * bp,
      fontSize: 24 * bp,
      color: AstrogatorColor.White,
    },
    filterButton: {
      position: "absolute",
      top: 0,
      right: 0,
      width: 70 * bp,
      height: 70 * bp,
      borderBottomLeftRadius: 70 * bp,
      alignItems: "center",
      padding: 5 * bp,
      borderRadius: 5 * bp,
      backgroundColor: AstrogatorColor.VenetianNights,
    },
    statusWrapper: {
      flexDirection: "row",
      alignItems: "center",
    },
    status: {
      color: status === Status.Active ? "green" : "red",
      marginLeft: 5 * bp,
      marginBottom: 5 * bp,
      textTransform: "capitalize",
    },
    roverDetailText: {
      color: AstrogatorColor.White,
      marginBottom: 5 * bp,
    },
  });
