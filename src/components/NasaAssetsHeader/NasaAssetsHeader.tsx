import React, { FC } from "react";
import Animated from "react-native-reanimated";
import { styles } from "./NasaAssetsHeader.styled";
import { Typography } from "../Typography";
import { NasaAssetsHeaderProps } from "./NasaAssetsHeader.props";

const NasaAssetsHeader: FC<NasaAssetsHeaderProps> = ({
  headerAnimatedStyle,
}) => {
  return (
    <Animated.View style={[styles.container, headerAnimatedStyle]}>
      <Typography style={{ color: "white" }}>Header</Typography>
    </Animated.View>
  );
};

export default NasaAssetsHeader;
