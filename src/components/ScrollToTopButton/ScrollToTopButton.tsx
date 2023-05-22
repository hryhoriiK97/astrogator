import React, { FC } from "react";
import { Pressable, Animated } from "react-native";
import { ScrollToTopButtonProps } from "./ScrollToTopButton.props";
import { TopArrow } from "../../../assets/svgs/TopArrow";
import { styles } from "./ScrollToTopButton.styled";

const ScrollToTopButton: FC<ScrollToTopButtonProps> = ({
  onPress,
  buttonOpacity,
}) => {
  return (
    <Animated.View style={[styles.buttonWrapper, { opacity: buttonOpacity }]}>
      <Pressable onPress={onPress} style={styles.button}>
        <TopArrow />
      </Pressable>
    </Animated.View>
  );
};

export default ScrollToTopButton;
