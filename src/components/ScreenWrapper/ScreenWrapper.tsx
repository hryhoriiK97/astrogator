import React, { FC } from "react";
import { ImageBackground, View } from "react-native";
import Background from "../../../assets/images/Group.png";
import { ScreenWrapperProps } from "./ScreenWrapper.props";
import { styles } from "./ScreenWrapper.styled";

const ScreenWrapper: FC<ScreenWrapperProps> = ({ children }) => {
  return (
    <ImageBackground
      source={Background}
      resizeMode={"cover"}
      progressiveRenderingEnabled={true}
      resizeMethod={"resize"}
      style={styles.backgroundImage}
      imageStyle={styles.imageStyle}
    >
      <View style={styles.backdropWrapper} />
      {children}
    </ImageBackground>
  );
};

export default ScreenWrapper;
