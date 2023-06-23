import { StyleSheet } from "react-native";
import { AstrogatorColor } from "../../theming/theme";
import { moderateVerticalScale } from "react-native-size-matters";

export const NASA_ASSETS_HEADER_HEIGHT = 200;

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 1000,
    height: NASA_ASSETS_HEADER_HEIGHT,
    paddingTop: 5,
    paddingHorizontal: moderateVerticalScale(10),
    backgroundColor: AstrogatorColor.Black,
  },
  buttonsWrapper: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  button: {
    width: "40%",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    borderRadius: 4,
  },
  searchButton: {
    backgroundColor: AstrogatorColor.VenetianNights,
  },
  closeButton: {
    backgroundColor: AstrogatorColor.Gray,
  },
  buttonTitle: {
    color: AstrogatorColor.White,
  },
});
