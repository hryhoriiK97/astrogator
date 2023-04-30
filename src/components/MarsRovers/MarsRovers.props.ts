import { MarsRoverItemResponse } from "../../types/MarsRoverItemResponse";

export interface MarsRoversProps {
  marsRoversData: MarsRoverItemResponse[];
  onRoverItemPress: (rover: MarsRoverItemResponse) => void;
}
