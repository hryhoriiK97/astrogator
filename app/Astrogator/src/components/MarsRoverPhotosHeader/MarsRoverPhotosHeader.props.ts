import {MarsRoverItemResponse} from '../../types/MarsRoverItemResponse';

export interface MarsRoverPhotosHeaderProps {
  rover: MarsRoverItemResponse;
  currentMarsSol: number;
  selectedCamera: string | null;
  onFilterButtonPress: () => void;
}
