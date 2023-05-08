import React, { FC } from "react";
import { ActivityIndicator, View } from "react-native";
import { LoadingScreenProps } from "./LoadingScreen.props";
import { styles } from "./LoadingScreen.styled";
import { AstrogatorColor } from "../../theming/theme";

const LoadingScreen: FC<LoadingScreenProps> = ({
  CustomActivityIndicator,
  backgroundColor = AstrogatorColor.Black,
}) => {
  return (
    <View style={styles(backgroundColor).container}>
      {CustomActivityIndicator ?? (
        <ActivityIndicator size={"large"} color={"#724FFF"} />
      )}
    </View>
  );
};

export default LoadingScreen;
