import { Animated } from "react-native";

export interface ScrollToTopButtonProps {
  onPress: () => void;
  buttonOpacity: Animated.Value;
}
