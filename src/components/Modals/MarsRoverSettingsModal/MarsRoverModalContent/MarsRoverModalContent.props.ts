import { MarsRoverItemResponse } from "../../../../types/MarsRoverItemResponse";

export interface MarsRoverModalContentProps {
  rover: MarsRoverItemResponse;
  selectedMarsSol: string | null;
  selectedCamera: string | null;
  onCameraSelection: (camera: string) => void;
  onMarsSolSelection: (marsSol: string) => void;
  onExploreButtonPress: () => void;
}
