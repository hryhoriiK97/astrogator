import {FastImageProps} from 'react-native-fast-image';

export interface MarsRoverItemProps {
  name: string;
  imageSource: FastImageProps['source'];
  onPress: () => void;
  onLongPress: () => void;
}
