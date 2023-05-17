import { ImageProps, Animated } from "react-native";

export interface MarsPhotoItemProps {
  name: string;
  cameraFullName: string;
  cameraAbbreviation: string;
  imageSource: ImageProps["source"];
  onPress: () => void;
  translateX: Animated.AnimatedInterpolation<string | number>;
}
