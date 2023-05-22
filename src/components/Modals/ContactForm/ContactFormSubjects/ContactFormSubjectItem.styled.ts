import { StyleSheet } from "react-native";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";

export const styles = StyleSheet.create({
  container: {
    marginVertical: moderateVerticalScale(15),
    paddingLeft: moderateScale(20),
    justifyContent: "center",
  },
});
