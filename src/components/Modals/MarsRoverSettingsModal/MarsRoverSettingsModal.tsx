import { BottomSheetModal } from "@gorhom/bottom-sheet";
import React, { FC, useCallback, useMemo } from "react";
import { commonStyles } from "../../../theming/commonStyles";
import { CustomBottomSheetBackdrop } from "../../CustomBottomSheetBackdrop";
import { CustomBottomSheetModalBackground } from "../../CustomBottomSheetModalBackground";
import { MarsRoverModalContent } from "./MarsRoverModalContent";
import { useMarsRoversStore } from "../../../stores/marsRovers.store";
import { MarsRoverSettingsProps } from "./MarsRoverSettingsModal.props";

const MarsRoverSettings: FC<MarsRoverSettingsProps> = ({
  bottomSheetModalRef,
  onExploreButtonPress,
}) => {
  const [setSelectedCamera, setSelectedMarsSol, selectedRover] =
    useMarsRoversStore((state) => [
      state.setSelectedCamera,
      state.setSelectedMarsSol,
      state.selectedRover,
    ]);

  const bottomSheetSnapPoints = useMemo(() => ["75%"], []);

  const handleCloseModalPress = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);

  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      handleIndicatorStyle={commonStyles.bottomSheetModalIndicator}
      backdropComponent={(props) => (
        <CustomBottomSheetBackdrop {...props} onPress={handleCloseModalPress} />
      )}
      backgroundComponent={CustomBottomSheetModalBackground}
      snapPoints={bottomSheetSnapPoints}
      enableOverDrag={false}
      enableDismissOnClose={true}
    >
      {selectedRover && (
        <MarsRoverModalContent
          rover={selectedRover}
          onCameraSelection={setSelectedCamera}
          onMarsSolSelection={setSelectedMarsSol}
          onExploreButtonPress={() => {
            handleCloseModalPress();
            onExploreButtonPress();
          }}
        />
      )}
    </BottomSheetModal>
  );
};

export default MarsRoverSettings;
