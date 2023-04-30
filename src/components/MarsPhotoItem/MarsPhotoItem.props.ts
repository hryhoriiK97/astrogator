import { marsRoverImages } from './../../stacks/BottomTab/screens/MarsRovers/MarsRovers.utils';
import { ImageProps, Animated } from "react-native";

export interface MarsPhotoItemProps {
  name: string;
  imageSource: ImageProps["source"];
  roverImageSource: ImageProps["source"];
  onPress: () => void;
  onLongPress: () => void;
  translateX: Animated.AnimatedInterpolation<string | number>;
}
