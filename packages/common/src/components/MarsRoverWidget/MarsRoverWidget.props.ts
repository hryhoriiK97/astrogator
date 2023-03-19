import {ImageBackgroundProps} from 'react-native';

export interface MarsRoverWidgetProps {
  name: string;
  imageSource: ImageBackgroundProps['source'];
  onPress: () => void;
  onLongPress: () => void;
}
