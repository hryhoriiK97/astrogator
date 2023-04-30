import {
  Divider,
  DividerVariant,
  LoadingScreen,
  MarsPhotoItem,
  MarsRoverPhotoItem,
  Raleway,
  SafeInputTypeCheck,
  SafeTextInput,
  Typography,
} from "../../../../components";
import { NASA_API_KEY } from "@env";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
// import { BlurView } from "expo-blur";
import { useHeaderHeight } from "@react-navigation/elements";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { FlashList } from "@shopify/flash-list";
import React, { FC, useCallback, useMemo, useRef, useState } from "react";
import { Dimensions, ImageBackground, Pressable, View } from "react-native";
//TODO
// import { Picker } from "react-native-wheel-pick";
import { useQuery } from "react-query";
import Background from "../../../../../assets/images/Group.png";
import { apodAxiosInstance } from "../../../../api/apodAxiosInstance";
import { CustomBottomSheetBackdrop } from "../../../../components/CustomBottomSheetBackdrop";
import { CustomBottomSheetModalBackground } from "../../../../components/CustomBottomSheetModalBackground";
import { commonStyles } from "../../../../theming/commonStyles";
import { AstrogatorColor } from "../../../../theming/theme";
import { MarsRoverPhotoItemResponse } from "../../../../types/MarsRoverPhotoItemResponse";
import {
  MarsRoversPhotosStackNavigationProp,
  MarsRoversPhotosStackParamList,
  MarsRoversPhotosStackRoutes,
} from "../../MarsRoversPhotos.routes";
import { styles } from "./MarsRoverPhotos.styled";
import { inputErrorTexts } from "./MarsRoverPhotos.utils";
import { Animated } from "react-native";
import { MarsRover, marsRoverImages } from "../../../BottomTab/screens/MarsRovers/MarsRovers.utils";

const { width } = Dimensions.get("screen");

enum MarsRoverPhotosQueryKey {
  MarsRoverPhotos = "MarsRoverPhotos",
}

const MarsRoverPhotosScreen: FC = () => {
  const flashListRef = useRef<FlashList<MarsRoverPhotoItemResponse>>(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const { navigate, goBack } =
    useNavigation<MarsRoversPhotosStackNavigationProp>();

  const route =
    useRoute<
      RouteProp<MarsRoversPhotosStackParamList, "MarsRoverPhotosScreen">
    >();
  const { rover } = route.params;

  const pickerData = ["All", ...rover.cameras.map((camera) => camera.name)];

  const headerHeight = useHeaderHeight();

  const [isError, setIsError] = useState<boolean>(false);

  const [currentMarsSol, setCurrentMarsSol] = useState<number>(rover.max_sol);
  const [selectedCamera, setSelectedCamera] = useState<string | null>(null);

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const bottomSheetSnapPoints = useMemo(() => ["65%"], []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleCloseModalPress = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);

  const {
    data: marsRoverPhotosResponse,
    isLoading: isMarsRoverPhotosLoading,
    isError: isMarsRoverPhotosError,
    refetch: marsRoverPhotosRefetch,
    isRefetching: isMarsRoverPhotosRefetching,
  } = useQuery(MarsRoverPhotosQueryKey.MarsRoverPhotos, () =>
    apodAxiosInstance.get(
      `/mars-photos/api/v1/rovers/${rover.name.toLowerCase()}/photos?sol=${currentMarsSol}${
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
        roverImageSource={marsRoverImages[rover.name.toLowerCase() as MarsRover]}
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
        onLongPress={() => {
          handlePresentModalPress();
        }}
      />
    );
  };

  // const renderItem = ({ item }: { item: MarsRoverPhotoItemResponse }) => {
  //   return (
  //     <View style={styles().renderItemWrapper}>
  //       <MarsRoverPhotoItem
  //         imageSource={{ uri: replaceHttpWithHttps(item.img_src) }}
  //         defaultSource={require("../../../../../assets/images/apod-tile.webp")}
  //         cameraFullName={item.camera.full_name}
  //         cameraAbbreviation={item.camera.name}
  //         earthData={item.earth_date}
  //         sol={item.sol}
  //         onPress={() =>
  //           navigate("MarsFullImageStack", {
  //             screen: "MarsFullImageScreen",
  //             params: {
  //               photoUri: replaceHttpWithHttps(item.img_src),
  //               roverName: item.rover.name,
  //               cameraName: item.camera.full_name,
  //               cameraAbbreviation: item.camera.name,
  //               earthDate: item.earth_date,
  //               marsSol: item.sol,
  //             },
  //           })
  //         }
  //       />
  //     </View>
  //   );
  // };

  const renderItemSeparator = () => {
    return <Divider variant={DividerVariant.Divider_10_Vertical} />;
  };
  return (
    <>
      <ImageBackground source={Background} style={styles(headerHeight).wrapper}>
        <View style={styles().backdropWrapper} />
        {/* <BlurView style={styles().blurView} /> */}
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
        {/* <FlashList
          ref={flashListRef}
          ListHeaderComponent={
            <MarsRoverPhotosHeader
              rover={rover}
              currentMarsSol={currentMarsSol}
              selectedCamera={selectedCamera}
              onFilterButtonPress={handlePresentModalPress}
              onBackButtonPress={() => goBack()}
            />
          }
          ListEmptyComponent={
            marsRoverPhotosData.length === 0 ? (
              <View>
                <Typography color={AstrogatorColor.White}>
                  No photo for current sol
                </Typography>
              </View>
            ) : null
          }
          ListFooterComponent={<View style={styles().footer} />}
          showsVerticalScrollIndicator={false}
          data={marsRoverPhotosData}
          renderItem={renderItem}
          ItemSeparatorComponent={renderSeparatorItem}
          estimatedItemSize={355.5}
        /> */}
      </ImageBackground>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        backdropComponent={(props) => (
          <CustomBottomSheetBackdrop
            {...props}
            onPress={handleCloseModalPress}
          />
        )}
        handleIndicatorStyle={commonStyles.bottomSheetModalIndicator}
        backgroundComponent={CustomBottomSheetModalBackground}
        snapPoints={bottomSheetSnapPoints}
        enableOverDrag={false}
        enableDismissOnClose={true}
      >
        <View style={styles().modalContainer}>
          <Typography
            style={styles().pickerTitle}
            variant={Raleway.Bold}
            color={AstrogatorColor.White}
          >
            Provide Mars Sol and Camera Type
          </Typography>
          <SafeTextInput
            inputTypeCheckVariant={SafeInputTypeCheck.Number}
            setTextValue={(value) => setCurrentMarsSol(Number(value))}
            isError={isError}
            setIsError={setIsError}
            errorTexts={inputErrorTexts}
            maxValue={rover.max_sol}
            minValue={0}
          />
          {/* <Picker
            style={styles().picker}
            pickerData={pickerData}
            selectedValue={pickerData[0]}
            onValueChange={(value): void =>
              setSelectedCamera(value !== "All" ? value : null)
            }
          /> */}
          <Pressable
            style={[styles().getButton, isError && styles().disabledGetButton]}
            disabled={isError}
            onPress={(): void => {
              marsRoverPhotosRefetch({
                queryKey: MarsRoverPhotosQueryKey.MarsRoverPhotos,
              });
            }}
          >
            <Typography style={styles().getButtonTitle}>Get Photos</Typography>
          </Pressable>
        </View>
      </BottomSheetModal>
    </>
  );
};

export default MarsRoverPhotosScreen;
