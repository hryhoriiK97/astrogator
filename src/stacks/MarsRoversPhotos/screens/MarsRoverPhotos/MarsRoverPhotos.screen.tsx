import {
  Spacer,
  SpacerVariant,
  LoadingScreen,
  MarsPhotoItem,
} from "../../../../components";
import { NASA_API_KEY } from "@env";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

import { useNavigation } from "@react-navigation/native";
import { FlashList } from "@shopify/flash-list";
import React, { FC, useCallback, useRef } from "react";
import { Dimensions, View } from "react-native";
import { useQuery } from "react-query";
import { apodAxiosInstance } from "../../../../api/apodAxiosInstance";
import { MarsRoverPhotoItemResponse } from "../../../../types/MarsRoverPhotoItemResponse";
import {
  MarsRoversPhotosStackNavigationProp,
  MarsRoversPhotosStackRoutes,
} from "../../MarsRoversPhotos.routes";
import { styles } from "./MarsRoverPhotos.styled";
import { Animated } from "react-native";
import {
  MarsRover,
  marsRoverImages,
} from "../../../BottomTab/screens/MarsRovers/MarsRovers.utils";
import { useMarsRoversStore } from "../../../../stores/marsRovers.store";
import { MarsRoverSettingsModal } from "../../../../components/Modals";

const { width } = Dimensions.get("screen");

enum MarsRoverPhotosQueryKey {
  MarsRoverPhotos = "MarsRoverPhotos",
}

const MarsRoverPhotosScreen: FC = () => {
  const { navigate } = useNavigation<MarsRoversPhotosStackNavigationProp>();

  const flashListRef = useRef<FlashList<MarsRoverPhotoItemResponse>>(null);
  const scrollX = useRef(new Animated.Value(0)).current;

  const [selectedRover, selectedCamera, selectedMarsSol] = useMarsRoversStore(
    (state) => [
      state.selectedRover,
      state.selectedCamera,
      state.selectedMarsSol,
    ]
  );

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  console.log(selectedCamera, selectedMarsSol, "SELECTEDITEMS");

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const {
    data: marsRoverPhotosResponse,
    isLoading: isMarsRoverPhotosLoading,
    isError: isMarsRoverPhotosError,
    refetch: marsRoverPhotosRefetch,
    isRefetching: isMarsRoverPhotosRefetching,
  } = useQuery(MarsRoverPhotosQueryKey.MarsRoverPhotos, () =>
    apodAxiosInstance.get(
      `/mars-photos/api/v1/rovers/${selectedRover?.name.toLowerCase()}/photos?sol=${
        selectedMarsSol || selectedRover?.max_sol
      }${
        selectedCamera ? `&camera=${selectedCamera}` : ""
      }&api_key=${NASA_API_KEY}`
    )
  );

  if (isMarsRoverPhotosLoading || isMarsRoverPhotosRefetching) {
    return <LoadingScreen />;
  }

  const marsRoverPhotosData: MarsRoverPhotoItemResponse[] =
    marsRoverPhotosResponse?.data.photos;

  const renderItem = ({
    item,
    index,
  }: {
    item: MarsRoverPhotoItemResponse;
    index: number;
  }) => {
    const inputRange = [
      (index - 1) * width,
      index * width,
      (index + 1) * width,
    ];
    const translateX = scrollX.interpolate({
      inputRange,
      outputRange: [-width * 0.7, 0, width * 0.7],
    });
    return (
      <MarsPhotoItem
        name={item.rover.name}
        imageSource={{ uri: item.img_src }}
        roverImageSource={
          marsRoverImages[selectedRover?.name.toLowerCase() as MarsRover]
        }
        translateX={translateX}
        onPress={() => {
          bottomSheetModalRef.current?.close();
          navigate(MarsRoversPhotosStackRoutes.MarsFullImageStack, {
            screen: "MarsFullImageScreen",
            params: {
              photoUri: item.img_src,
              cameraName: item.camera.full_name,
              earthDate: item.earth_date,
              marsSol: item.sol,
              roverName: item.rover.name,
              cameraAbbreviation: item.camera.name,
            },
          });
        }}
        onMarsAvatarPress={handlePresentModalPress}
      />
    );
  };

  const renderItemSeparator = () => {
    return <Spacer variant={SpacerVariant.Spacer_10_Vertical} />;
  };
  return (
    <>
      <View style={styles().header}></View>
      <Animated.FlatList
        contentContainerStyle={{ backgroundColor: "white" }}
        data={marsRoverPhotosData}
        renderItem={renderItem}
        pagingEnabled={true}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={renderItemSeparator}
      />
      <MarsRoverSettingsModal
        bottomSheetModalRef={bottomSheetModalRef}
        onExploreButtonPress={(): void => {
          marsRoverPhotosRefetch({
            queryKey: MarsRoverPhotosQueryKey.MarsRoverPhotos,
          });
        }}
      />
    </>
  );
};

export default MarsRoverPhotosScreen;
