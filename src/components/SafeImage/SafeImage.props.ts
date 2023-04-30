import { ImageProps } from "expo-image";
import { ViewStyle } from "react-native";

export interface SafeImageProps {
  source: ImageProps["source"];
  defaultSource: ImageProps["placeholder"];
  linearGradientColors?: string[];
  imageStyle?: ImageProps["style"];
  imageWrapperStyle?: ViewStyle;
  loadingIndicatorHeight?: number;
}
