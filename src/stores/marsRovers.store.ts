import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { MarsRoverItemResponse } from "../types/MarsRoverItemResponse";
interface MarsRoversState {
  selectedRover: MarsRoverItemResponse | null;
  selectedCamera: string | null;
  selectedMarsSol: string | null;
  selectedPhotoIndex: number | null;
}

interface MarsRoversAction {
  setSelectedRover: (rover: MarsRoverItemResponse) => void;
  setSelectedCamera: (camera: string | null) => void;
  setSelectedMarsSol: (marsSol: string | null) => void;
  setSelectedPhotoIndex: (photoIndex: number | null) => void;
}

export const useMarsRoversStore = create<MarsRoversState & MarsRoversAction>()(
  devtools((set) => ({
    selectedRover: null,
    selectedCamera: null,
    selectedMarsSol: null,
    selectedPhotoIndex: null,
    setSelectedRover: (rover) => set(() => ({ selectedRover: rover })),
    setSelectedCamera: (camera) => set(() => ({ selectedCamera: camera })),
    setSelectedMarsSol: (marsSol) => set(() => ({ selectedMarsSol: marsSol })),
    setSelectedPhotoIndex: (photoIndex) =>
      set(() => ({ selectedPhotoIndex: photoIndex })),
  }))
);
