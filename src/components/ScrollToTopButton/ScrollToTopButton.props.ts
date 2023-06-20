import Animated from "react-native-reanimated";

export interface ScrollToTopButtonProps {
  onPress: () => void;
  buttonOpacity: Animated.SharedValue<number>;
}
