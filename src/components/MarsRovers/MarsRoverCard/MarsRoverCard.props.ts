import { ImageProps } from "expo-image";
import Animated from "react-native-reanimated";

export interface MarsRoverCardProps {
  card: {
    width: number;
    height: number;
    source: ImageProps["source"];
  };
  onPress: () => void;
  shuffleBack: Animated.SharedValue<boolean>;
  index: number;
}
