import { NASA_API_KEY } from "@env";
import React, { FC, useCallback, useEffect, useRef } from "react";
import {
  Animated,
  Dimensions,
  View,
  FlatList,
  ImageBackground,
} from "react-native";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import { useQuery } from "react-query";

import { apodAxiosInstance } from "../../../../api/apodAxiosInstance";
import { MarsRoverPhotoItemResponse } from "../../../../types/MarsRoverPhotoItemResponse";
import Background from "../../../../../assets/images/Group.png";
import {
  MarsRoversPhotosStackNavigationProp,
  MarsRoversPhotosStackRoutes,
} from "../../MarsRoversPhotos.routes";
import {
  MarsRover,
  marsRoverImages,
} from "../../../BottomTab/screens/MarsRovers/MarsRovers.utils";
import {
  Spacer,
  SpacerVariant,
  LoadingScreen,
  MarsPhotoItem,
  MarsRoverSettingsModal,
} from "../../../../components";
import { useMarsRoversStore } from "../../../../stores/marsRovers.store";
import { styles } from "./MarsRoverPhotos.styled";

const { width } = Dimensions.get("screen");

enum MarsRoverPhotosQueryKey {
  MarsRoverPhotos = "MarsRoverPhotos",
}

const MarsRoverPhotosScreen: FC = () => {
  const { navigate, goBack } =
    useNavigation<MarsRoversPhotosStackNavigationProp>();

  const flatListRef = useRef<FlatList<MarsRoverPhotoItemResponse>>(null);

  const scrollX = useRef(new Animated.Value(0)).current;

  const [selectedRover, selectedCamera, selectedMarsSol, selectedPhotoIndex] =
    useMarsRoversStore((state) => [
      state.selectedRover,
      state.selectedCamera,
      state.selectedMarsSol,
      state.selectedPhotoIndex,
    ]);

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

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

  const getItemLayout = (
    _: MarsRoverPhotoItemResponse[] | null | undefined,
    index: number
  ) => ({
    length: width,
    offset: width * index,
    index,
  });

  useEffect(() => {
    if (flatListRef && flatListRef.current && !!selectedPhotoIndex) {
      flatListRef.current?.scrollToIndex({
        index: selectedPhotoIndex,
        animated: false,
      });
    }
  }, [flatListRef, flatListRef.current, selectedPhotoIndex]);

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
        cameraFullName={item.camera.full_name}
        cameraAbbreviation={item.camera.name}
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
        onBackButtonPress={goBack}
        onListButtonPRess={() => {
          navigate("MarsRoverPhotosFullList", {
            marsPhotos: marsRoverPhotosData,
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
    <ImageBackground
      source={Background}
      resizeMode={"cover"}
      progressiveRenderingEnabled={true}
      resizeMethod={"resize"}
      style={styles.backgroundImage}
      imageStyle={styles.imageStyle}
    >
      <View style={styles.overlay} />
      <View style={styles.screen}>
        <Animated.FlatList
          ref={flatListRef}
          data={marsRoverPhotosData}
          getItemLayout={getItemLayout}
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
      </View>
    </ImageBackground>
  );
};

export default MarsRoverPhotosScreen;
