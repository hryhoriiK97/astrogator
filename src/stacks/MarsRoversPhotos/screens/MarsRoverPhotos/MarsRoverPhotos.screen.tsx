import { NASA_API_KEY } from "@env";
import React, { FC, useCallback, useEffect, useRef } from "react";
import {
  Animated,
  Dimensions,
  View,
  FlatList,
  Pressable,
  SafeAreaView,
} from "react-native";
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
} from "../../../../components";
import { useMarsRoversStore } from "../../../../stores/marsRovers.store";
import { styles } from "./MarsRoverPhotos.styled";
import { DatePickerIcon } from "../../../../../assets/svgs/DatePickerIcon";
import { Chevron } from "../../../../../assets/svgs/Chevron";
import { List } from "../../../../../assets/svgs/List";
import { format } from "date-fns";
import { EmptyDataScreen } from "../../../../components/EmptyDataScreen";

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
          <View style={styles.header}>
            <Typography variant={Raleway.Bold} style={styles.title}>
              Gallery
            </Typography>
            <Spacer variant={SpacerVariant.Spacer_5_Vertical} />
            <Typography variant={Raleway.Regular} style={styles.subtitle}>
              {!isEmptyPhotosList
                ? `${
                    currentDate
                      ? format(new Date(currentDate), "yyyy-MM-dd")
                      : "-"
                  } - ${marsRoverPhotosData.length} photos`
                : ""}
            </Typography>
            <Spacer variant={SpacerVariant.Spacer_10_Vertical} />
            <View style={styles.navigationBar}>
              <Pressable style={styles.backButtonContainer} onPress={goBack}>
                <Chevron rotate={180} />
              </Pressable>
              <View style={styles.datePickerWrapper}>
                <Pressable
                  style={styles.datePickerContainer}
                  onPress={handlePresentModalPress}
                >
                  <Typography
                    variant={Raleway.Medium}
                    style={styles.datePickerText}
                  >
                    Date Picker
                  </Typography>
                  <Spacer variant={SpacerVariant.Spacer_3_Horizontal} />
                  <DatePickerIcon />
                </Pressable>
                <Spacer variant={SpacerVariant.Spacer_7_Horizontal} />
                <Pressable
                  style={styles.fullListButtonContainer}
                  disabled={isEmptyPhotosList}
                  android_disableSound={true}
                  onPress={() => {
                    navigate("MarsRoverPhotosFullList", {
                      marsRoverName: selectedRover?.name!,
                      marsPhotos: marsRoverPhotosData,
                    });
                  }}
                >
                  <List />
                </Pressable>
              </View>
            </View>
          </View>
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
                <EmptyDataScreen text={"No data for this search input"} />
              ) : undefined
            }
          />
          <MarsRoverSettingsModal
            bottomSheetModalRef={bottomSheetModalRef}
            onExploreButtonPress={(): void => {
              marsRoverPhotosRefetch({
                queryKey: MarsRoverPhotosQueryKey.MarsRoverPhotos,
              });
              if (flatListRef && flatListRef.current) {
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
