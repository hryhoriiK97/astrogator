import { ImageBackgroundProps, PressableProps } from "react-native";

export interface ApodWidgetProps {
  imageSource: ImageBackgroundProps["source"];
  title: string;
  date: string;
  author?: string;
  onPress: PressableProps["onPress"];
  onLongPress?: () => void;
}
