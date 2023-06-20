import React, { FC } from "react";
import { Pressable } from "react-native";
import { ScrollToTopButtonProps } from "./ScrollToTopButton.props";
import { TopArrow } from "../../../assets/svgs/TopArrow";
import { styles } from "./ScrollToTopButton.styled";
import Animated, { useAnimatedStyle } from "react-native-reanimated";

const ScrollToTopButton: FC<ScrollToTopButtonProps> = ({
  onPress,
  buttonOpacity,
}) => {
  const buttonStyle = useAnimatedStyle(() => {
    return {
      opacity: buttonOpacity.value,
    };
  });
  return (
    <Animated.View style={[styles.buttonWrapper, buttonStyle]}>
      <Pressable onPress={onPress} style={styles.button}>
        <TopArrow />
      </Pressable>
    </Animated.View>
  );
};

export default ScrollToTopButton;
