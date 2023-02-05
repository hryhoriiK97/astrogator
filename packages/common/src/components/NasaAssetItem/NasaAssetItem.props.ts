import {FastImageProps} from 'react-native-fast-image';

export interface NasaAssetItemProps {
  imageSource: FastImageProps['source'];
  defaultSource: FastImageProps['defaultSource'];
  onMoreInfoPress: () => void;
  onPress: () => void;
}
