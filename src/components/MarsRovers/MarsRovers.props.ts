import { MarsRoverItemResponse } from "../../types/MarsRoverItemResponse";

export interface MarsRoversProps {
  marsRoversData: MarsRoverItemResponse[];
  onLearnMorePress: (rover: MarsRoverItemResponse) => void;
  onGalleryPress: (rover: MarsRoverItemResponse) => void;
}
