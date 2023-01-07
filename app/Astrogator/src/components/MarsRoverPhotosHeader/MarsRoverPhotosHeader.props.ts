import {MarsRoverItemResponse} from '../../types/MarsRoverItemResponse';

export interface MarsRoverPhotosHeaderProps {
  rover: MarsRoverItemResponse;
  onBackButtonPress: () => void;
}
