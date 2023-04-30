import {
  Divider,
  DividerVariant,
  LoadingScreen,
  MarsPhotoItem,
  Raleway,
  Typography,
} from "../../../../components";
import { NASA_API_KEY } from "@env";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import React, { FC, useCallback, useMemo, useRef, useState } from "react";
import {
  Dimensions,
  Animated,
  SafeAreaView,
  ImageBackground,
  View,
} from "react-native";
import { useQuery } from "react-query";
import Background from "../../../../../assets/images/Group.png";
import { apodAxiosInstance } from "../../../../api/apodAxiosInstance";
import { CustomBottomSheetBackdrop } from "../../../../components/CustomBottomSheetBackdrop";
import { CustomBottomSheetModalBackground } from "../../../../components/CustomBottomSheetModalBackground";
import { MarsRoverModal } from "../../../../components/MarsRoverModal";
import { commonStyles } from "../../../../theming/commonStyles";
import { MarsRoverItemResponse } from "../../../../types/MarsRoverItemResponse";
import {
  RootStackNavigationProp,
  RootStackRoutes,
} from "../../../Root/Root.routes";
import { styles } from "./MarsRovers.styled";
import { MarsRover, marsRoverImages } from "./MarsRovers.utils";
import { MarsRovers } from "../../../../components/MarsRovers";
const { width } = Dimensions.get("screen");

enum MarsRoverPhotosQueryKey {
  MarsRovers = "MarsRovers",
}

const MarsRoversScreen: FC = () => {
  const { navigate } = useNavigation<RootStackNavigationProp>();

  const scrollX = useRef(new Animated.Value(0)).current;

  const {
    data: marsRovesResponse,
    isLoading: isMarsRoversLoading,
    isError: isMarsRoversError,
    refetch: marsRoversRefetch,
    isRefetching: isMarsRoversRefetching,
  } = useQuery(MarsRoverPhotosQueryKey.MarsRovers, () =>
    apodAxiosInstance.get(`/mars-photos/api/v1/rovers?api_key=${NASA_API_KEY}`)
  );
  const [selectedRover, setSelectedRover] =
    useState<MarsRoverItemResponse | null>(null);

    const [pickersData, setPickersData] = useState<string[]>([]);

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const snapPoints = useMemo(() => ["80%"], []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleCloseModalPress = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
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
        <MarsRovers marsRoversData={marsRoversData} onRoverItemPress={(rover) => {
            handlePresentModalPress();
            setSelectedRover(rover);
            setPickersData(["All", ...rover.cameras.map((camera) => camera.name)])

        }} />
        <BottomSheetModal
          ref={bottomSheetModalRef}
          handleIndicatorStyle={commonStyles.bottomSheetModalIndicator}
          backdropComponent={(props) => (
            <CustomBottomSheetBackdrop
              {...props}
              onPress={handleCloseModalPress}
            />
          )}
          backgroundComponent={CustomBottomSheetModalBackground}
          snapPoints={snapPoints}
          enableOverDrag={false}
          enableDismissOnClose={true}
        >
          <MarsRoverModal rover={selectedRover!} />
        </BottomSheetModal>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default MarsRoversScreen;
