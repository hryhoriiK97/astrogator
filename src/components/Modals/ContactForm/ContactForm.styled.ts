import { StyleSheet } from "react-native";
import { AstrogatorColor } from "../../../theming/theme";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";

export const styles = StyleSheet.create({
  outerWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    maxWidth: moderateScale(300),
    borderWidth: 2,
    borderColor: AstrogatorColor.VenetianNights,
    backgroundColor: AstrogatorColor.Black,
    borderRadius: 8,
    padding: moderateScale(35),
  },
  button: {
    borderRadius: 4,
    padding: 10,
    elevation: 2,
  },
  sendEmailButton: {
    backgroundColor: AstrogatorColor.VenetianNights,
  },
  buttonClose: {
    backgroundColor: AstrogatorColor.Gray,
  },
  title: {
    fontSize: moderateScale(24),
    color: AstrogatorColor.White,
  },
  modalText: {
    fontSize: moderateScale(13),
    color: AstrogatorColor.White,
    lineHeight: moderateVerticalScale(18),
  },
});
