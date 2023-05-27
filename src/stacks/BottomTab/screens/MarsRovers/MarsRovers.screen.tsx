import {
  LoadingScreen,
  Raleway,
  ScreenWrapper,
  Spacer,
  SpacerVariant,
  Typography,
  MarsRovers,
  MarsRoverSettingsModal,
  EmptyDataIndicator,
} from "../../../../components";
import { View } from "react-native";
import { NASA_API_KEY } from "@env";
import { useMarsRoversStore } from "../../../../stores/marsRovers.store";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import React, { FC, useCallback, useRef } from "react";
import { useQuery } from "react-query";
import { apodAxiosInstance } from "../../../../api/apodAxiosInstance";
import { MarsRoverItemResponse } from "../../../../types/MarsRoverItemResponse";
import { RootStackNavigationProp } from "../../../Root/Root.routes";
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
  } = useQuery(
    MarsRoverPhotosQueryKey.MarsRovers,
    () =>
      apodAxiosInstance.get(
        `/mars-photos/api/v1/rovers?api_key=${NASA_API_KEY}`
      ),
    {
      refetchOnWindowFocus: true,
    }
  );

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  if (isMarsRoversLoading || isMarsRoversRefetching) {
    return <LoadingScreen />;
  }

  if (isMarsRoversError || !marsRovesResponse?.data.rovers.length) {
    <EmptyDataIndicator
      onRefreshButtonPress={() =>
        marsRoversRefetch({ queryKey: MarsRoverPhotosQueryKey.MarsRovers })
      }
    />;
  }

  const marsRoversData: MarsRoverItemResponse[] =
    marsRovesResponse?.data.rovers ?? [];

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <View style={styles.header}>
          <Typography variant={Raleway.Bold} style={styles.title}>
            Mars Rovers
          </Typography>
          <Spacer variant={SpacerVariant.Spacer_5_Vertical} />
          <Typography style={styles.subtitle}>
            Explore space managing updates directly from NASA
          </Typography>
        </View>
        <Spacer variant={SpacerVariant.Spacer_10_Vertical} />
        {marsRoversData.length && !isMarsRoversError ? (
          <>
            <MarsRovers
              marsRoversData={marsRoversData}
              onLearnMorePress={(rover) => {
                setSelectedRover(rover);
                handlePresentModalPress();
              }}
              onGalleryPress={async (rover) => {
                await setSelectedRover(rover);
                await navigate("MarsRoversPhotosStack", {
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
          </>
        ) : (
          <View style={styles.emptyDataIndicatorWrapper}>
            <EmptyDataIndicator
              onRefreshButtonPress={() =>
                marsRoversRefetch({
                  queryKey: MarsRoverPhotosQueryKey.MarsRovers,
                })
              }
            />
          </View>
        )}
      </View>
    </ScreenWrapper>
  );
};

export default MarsRoversScreen;
