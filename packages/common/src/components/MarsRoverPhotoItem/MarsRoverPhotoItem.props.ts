import {FastImageProps} from 'react-native-fast-image';

export interface MarsRoverPhotoItemProps {
  imageSource: FastImageProps['source'];
  defaultSource: FastImageProps['defaultSource'];
  cameraFullName: string;
  cameraAbbreviation: string;
  earthData: string;
  sol: number;
  onPress: () => void;
}
