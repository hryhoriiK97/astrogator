import { NASA_API_KEY } from "@env";
import React, { FC, useCallback, useEffect, useRef } from "react";
import { Animated, Dimensions, View, FlatList, Pressable } from "react-native";
import { format } from "date-fns";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import { useQuery } from "react-query";

import { apodAxiosInstance } from "../../../../api/apodAxiosInstance";
import { MarsRoverPhotoItemResponse } from "../../../../types/MarsRoverPhotoItemResponse";
import {
  MarsRoversPhotosStackNavigationProp,
  MarsRoversPhotosStackRoutes,
} from "../../MarsRoversPhotos.routes";
import {
  Spacer,
  SpacerVariant,
  LoadingScreen,
  MarsPhotoItem,
  MarsRoverSettingsModal,
  Typography,
  Raleway,
  ScreenWrapper,
  MarsPhotosGalleryHeader,
} from "../../../../components";
import { useMarsRoversStore } from "../../../../stores/marsRovers.store";
import { styles } from "./MarsRoverPhotos.styled";
import { DatePickerIcon } from "../../../../../assets/svgs/DatePickerIcon";
import { Chevron } from "../../../../../assets/svgs/Chevron";
import { List } from "../../../../../assets/svgs/List";
import { EmptyDataIndicator } from "../../../../components";
import { SafeAreaView } from "react-native-safe-area-context";

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

  const isEmptyPhotosList =
    (isMarsRoverPhotosError && !marsRoverPhotosResponse?.data.photos) ||
    !marsRoverPhotosResponse?.data.photos.length;

  const marsRoverPhotosData: MarsRoverPhotoItemResponse[] =
    marsRoverPhotosResponse?.data?.photos ?? [];

  const currentDate =
    marsRoverPhotosResponse?.data.photos[0]?.earth_date ?? undefined;

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
        translateX={translateX}
        onPress={() => {
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
      />
    );
  };

  const renderItemSeparator = () => {
    return <Spacer variant={SpacerVariant.Spacer_10_Vertical} />;
  };

  return (
    <ScreenWrapper>
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.screen}>
          <MarsPhotosGalleryHeader
            roverName={selectedRover?.name}
            date={format(new Date(currentDate), "yyyy-MM-dd")}
            photosCount={marsRoverPhotosData.length}
            onGoBackButtonPress={goBack}
            onSettingsModalPress={handlePresentModalPress}
            onFullListPress={() => {
              navigate("MarsRoverPhotosFullList", {
                marsRoverName: selectedRover?.name!,
                marsPhotos: marsRoverPhotosData,
                date: format(new Date(currentDate), "yyyy-MM-dd"),
              });
            }}
            isFullListButtonDisabled={isEmptyPhotosList}
          />
          <Animated.FlatList
            ref={flatListRef}
            data={marsRoverPhotosData}
            getItemLayout={getItemLayout}
            contentContainerStyle={{
              width: isEmptyPhotosList ? "100%" : undefined,
            }}
            renderItem={renderItem}
            pagingEnabled={true}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: true }
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={renderItemSeparator}
            ListEmptyComponent={
              isEmptyPhotosList ? (
                <View style={styles.emptyDataIndicatorWrapper}>
                  <EmptyDataIndicator
                    onRefreshButtonPress={() =>
                      marsRoverPhotosRefetch({
                        queryKey: MarsRoverPhotosQueryKey.MarsRoverPhotos,
                      })
                    }
                  />
                </View>
              ) : undefined
            }
          />
          <MarsRoverSettingsModal
            bottomSheetModalRef={bottomSheetModalRef}
            onExploreButtonPress={(): void => {
              marsRoverPhotosRefetch({
                queryKey: MarsRoverPhotosQueryKey.MarsRoverPhotos,
              });
              if (
                flatListRef &&
                flatListRef.current &&
                !!marsRoverPhotosData.length
              ) {
                flatListRef.current?.scrollToIndex({
                  index: 0,
                  animated: false,
                });
              }
            }}
          />
        </View>
      </SafeAreaView>
    </ScreenWrapper>
  );
};

export default MarsRoverPhotosScreen;
