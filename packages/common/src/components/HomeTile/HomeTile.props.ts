import {ImageProps} from 'react-native';

export interface HomeTileProps {
  title: string;
  imageSource: ImageProps['source'];
  onPress: () => void;
  onLongPress: () => void;
}
