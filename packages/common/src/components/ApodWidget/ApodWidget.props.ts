import {ImageBackgroundProps} from 'react-native';

export interface ApodWidgetProps {
  imageSource: ImageBackgroundProps['source'];
  title: string;
  date: string;
  author: string;
  onPress: () => void;
  defaultSource?: ImageBackgroundProps['defaultSource'];
}
