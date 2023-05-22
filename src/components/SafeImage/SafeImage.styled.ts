import { StyleSheet } from "react-native";
import { verticalScale } from "react-native-size-matters";

export const styles = StyleSheet.create({
  imageWrapper: {
    width: "100%",
  },
  image: {
    width: "100%",
    height: verticalScale(300),
  },
  imageInfoWrapper: {
    marginBottom: verticalScale(30),
  },
});
