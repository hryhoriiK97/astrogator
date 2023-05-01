import { getRelativeUnits } from "../../../../utils/getRelativeUnits";
import { Dimensions, StyleSheet } from "react-native";
import { AstrogatorColor } from "../../../../theming/theme";

const { width } = Dimensions.get("screen");

const { bp } = getRelativeUnits();

export const styles = (headerHeight?: number) =>
  StyleSheet.create({
    header: {
      position: "absolute",
      top: 50 * bp,
      width: width * 0.5,
      borderRadius: 30 * bp,
      left: 40 * bp,
      rigth: 40 * bp,
      height: 60 * bp,
      backgroundColor: "red",
      zIndex: 10000,
    },
    wrapper: {
      position: "relative",
      backgroundColor: AstrogatorColor.Black,
      width: "100%",
      height: "100%",
      marginTop: headerHeight,
      marginBottom: 20,
    },
    blurView: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    backdropWrapper: {
      position: "absolute",
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0,0,0,0.25)",
    },
    renderItemWrapper: {
      paddingHorizontal: 16,
    },
    imageWrapper: {
      position: "relative",
    },
    footer: {
      height: 50 * bp,
    },
    modalContainer: {
      alignItems: "center",
      padding: 10 * bp,
    },
    pickerTitle: {
      maxWidth: 250 * bp,
      fontSize: 20 * bp,
      textAlign: "center",
      marginBottom: 10 * bp,
    },
    picker: {
      width: 250 * bp,
      height: 150 * bp,
      marginTop: 20 * bp,
      borderRadius: 20 * bp,
    },
    getButton: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 250 * bp,
      height: 40 * bp,
      borderRadius: 5 * bp,
      marginTop: 30 * bp,
      backgroundColor: AstrogatorColor.VenetianNights,
    },
    disabledGetButton: {
      backgroundColor: AstrogatorColor.Gray,
    },
    getButtonTitle: {
      fontSize: 16 * bp,
      color: AstrogatorColor.White,
    },
  });
