import { MarsRoverItemResponse } from "../../types/MarsRoverItemResponse";

export interface MarsRoverModalProps {
  rover: MarsRoverItemResponse;
  onCameraSelection: (camera: string) => void;
  onMarsSolSelection: (marsSol: string) => void;
  onExploreButtonPress: () => void;
}
