import { ImageProps, Animated } from "react-native";

export interface MarsPhotoItemProps {
  imageSource: ImageProps["source"];
  onPress: () => void;
  translateX: Animated.AnimatedInterpolation<string | number>;
}
