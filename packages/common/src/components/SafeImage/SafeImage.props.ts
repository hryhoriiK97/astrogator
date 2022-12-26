import {ViewStyle} from 'react-native';
import {FastImageProps} from 'react-native-fast-image';

export interface SafeImageProps {
  source: FastImageProps['source'];
  defaultSource: FastImageProps['defaultSource'];
  imageStyle?: FastImageProps['style'];
  imageWrapperStyle?: ViewStyle;
}
