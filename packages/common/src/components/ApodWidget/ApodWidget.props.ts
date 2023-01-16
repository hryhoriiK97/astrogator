import {FastImageProps} from 'react-native-fast-image';

export interface ApodWidgetProps {
  imageSource: FastImageProps['source'];
  title: string;
  date: string;
  author: string;
  description: string;
  onPress: () => void;
  defaultSource?: FastImageProps['defaultSource'];
}
