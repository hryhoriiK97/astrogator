import { BottomSheetModal } from "@gorhom/bottom-sheet";

export interface MarsRoverSettingsProps {
  bottomSheetModalRef: React.RefObject<BottomSheetModal>;
  onExploreButtonPress: () => void;
}
