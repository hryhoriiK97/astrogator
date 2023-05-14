import { LoadingScreen, Raleway, Typography } from "../../../../components";
import { NASA_API_KEY } from "@env";
import { MarsRovers } from "../../../../components/MarsRovers";
import { useMarsRoversStore } from "../../../../stores/marsRovers.store";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import React, { FC, useCallback, useRef } from "react";
import { SafeAreaView, ImageBackground, View } from "react-native";
import { useQuery } from "react-query";
import Background from "../../../../../assets/images/Group.png";
import { apodAxiosInstance } from "../../../../api/apodAxiosInstance";
import { MarsRoverItemResponse } from "../../../../types/MarsRoverItemResponse";
import { RootStackNavigationProp } from "../../../Root/Root.routes";
import { MarsRoverSettingsModal } from "../../../../components/Modals";
import { styles } from "./MarsRovers.styled";

enum MarsRoverPhotosQueryKey {
  MarsRovers = "MarsRovers",
}

const MarsRoversScreen: FC = () => {
  const { navigate } = useNavigation<RootStackNavigationProp>();
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const [setSelectedRover] = useMarsRoversStore((state) => [
    state.setSelectedRover,
  ]);

  const {
    data: marsRovesResponse,
    isLoading: isMarsRoversLoading,
    isError: isMarsRoversError,
    refetch: marsRoversRefetch,
    isRefetching: isMarsRoversRefetching,
  } = useQuery(MarsRoverPhotosQueryKey.MarsRovers, () =>
    apodAxiosInstance.get(`/mars-photos/api/v1/rovers?api_key=${NASA_API_KEY}`)
  );

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  if (isMarsRoversLoading || isMarsRoversRefetching) {
    return <LoadingScreen />;
  }

  const marsRoversData: MarsRoverItemResponse[] =
    marsRovesResponse?.data.rovers;

  return (
    <ImageBackground
      source={Background}
      resizeMode={"cover"}
      progressiveRenderingEnabled={true}
      resizeMethod={"resize"}
      style={styles.backgroundImage}
      imageStyle={styles.imageStyle}
    >
      <View style={styles.backdropWrapper} />
      <SafeAreaView style={styles.container}>
        <Typography variant={Raleway.Bold} style={styles.title}>
          Mars Rovers
        </Typography>
        <MarsRovers
          marsRoversData={marsRoversData}
          onLearnMorePress={(rover) => {
            handlePresentModalPress();
            setSelectedRover(rover);
          }}
          onGalleryPress={() => {
            navigate("MarsRoversPhotosStack", {
              screen: "MarsRoverPhotosScreen",
            });
          }}
        />
        <MarsRoverSettingsModal
          bottomSheetModalRef={bottomSheetModalRef}
          onExploreButtonPress={(): void => {
            navigate("MarsRoversPhotosStack", {
              screen: "MarsRoverPhotosScreen",
            });
          }}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default MarsRoversScreen;
