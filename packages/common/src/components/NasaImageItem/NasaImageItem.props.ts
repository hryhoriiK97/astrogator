import {FastImageProps} from 'react-native-fast-image';

export interface NasaImageItemProps {
  imageSource: FastImageProps['source'];
  defaultSource: FastImageProps['defaultSource'];
  title: string;
  description: string;
  date: string;
  author: string;
  onPress: () => void;
}
