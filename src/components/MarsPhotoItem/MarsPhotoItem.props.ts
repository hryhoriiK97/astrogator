import { ImageProps, Animated } from "react-native";

export interface MarsPhotoItemProps {
  name: string;
  imageSource: ImageProps["source"];
  roverImageSource: ImageProps["source"];
  onPress: () => void;
  onMarsAvatarPress: () => void;
  translateX: Animated.AnimatedInterpolation<string | number>;
}
