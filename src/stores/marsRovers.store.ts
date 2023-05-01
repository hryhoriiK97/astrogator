import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { MarsRoverItemResponse } from "../types/MarsRoverItemResponse";

interface MarsRoversState {
  selectedRover: MarsRoverItemResponse | null;
  selectedCamera: string | null;
  selectedMarsSol: string | null;
}

interface MarsRoversAction {
  setSelectedRover: (rover: MarsRoverItemResponse) => void;
  setSelectedCamera: (camera: string) => void;
  setSelectedMarsSol: (marsSol: string) => void;
}

export const useMarsRoversStore = create<MarsRoversState & MarsRoversAction>()(
  devtools((set) => ({
    selectedRover: null,
    selectedCamera: null,
    selectedMarsSol: null,
    setSelectedRover: (rover) => set(() => ({ selectedRover: rover })),
    setSelectedCamera: (camera) => set(() => ({ selectedCamera: camera })),
    setSelectedMarsSol: (marsSol) => set(() => ({ selectedMarsSol: marsSol })),
  }))
);
