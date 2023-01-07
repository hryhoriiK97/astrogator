import {ImageProps} from 'react-native';

export interface HomeTileProps {
  title: string;
  headerTitle: string;
  imageSource: ImageProps['source'];
  onPress: () => void;
  onMoreInfoPress: () => void;
}
