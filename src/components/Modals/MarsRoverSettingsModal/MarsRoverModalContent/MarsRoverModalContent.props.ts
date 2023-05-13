import { MarsRoverItemResponse } from "../../../../types/MarsRoverItemResponse";

export interface MarsRoverModalContentProps {
  rover: MarsRoverItemResponse;
  onCameraSelection: (camera: string) => void;
  onMarsSolSelection: (marsSol: string) => void;
  onExploreButtonPress: () => void;
}
