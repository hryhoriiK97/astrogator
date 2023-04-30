import {ImageProps} from 'react-native';

export interface NasaTileProps {
  title?: string;
  imageSource: ImageProps['source'];
  onPress: () => void;
  onLongPress: () => void;
}
