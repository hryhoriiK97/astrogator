import {FastImageProps} from 'react-native-fast-image';

export interface NasaVideoItemProps {
  imageSource: FastImageProps['source'];
  defaultSource: FastImageProps['defaultSource'];
  title: string;
  onPress: () => void;
  onLongPress: () => void;
}
