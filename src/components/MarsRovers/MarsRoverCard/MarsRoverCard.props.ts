import { ImageProps } from "expo-image";
import Animated from "react-native-reanimated";

export interface MarsRoverCardProps {
  card: {
    width: number;
    height: number;
    source: ImageProps["source"];
  };
  marsRoverName: string;
  marsStatus: string;
  launchDate: string;
  onLearnMorePress: () => void;
  onGalleryPress: () => void;
  shuffleBack: Animated.SharedValue<boolean>;
  index: number;
}
