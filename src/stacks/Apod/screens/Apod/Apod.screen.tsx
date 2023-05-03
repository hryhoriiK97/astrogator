import {
  Spacer,
  SpacerVariant,
  LoadingScreen,
  SafeImage,
  Typography,
} from "../../../../components";
import { NASA_API_KEY } from "@env";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { format, isFuture, isToday } from "date-fns";
import React, { FC, useCallback, useRef } from "react";
import {
  Dimensions,
  Platform,
  RefreshControl,
  ScrollView,
  StatusBar,
  View,
} from "react-native";
// import YoutubePlayer from "react-native-youtube-iframe";
import { useQuery } from "react-query";
import { apodAxiosInstance } from "../../../../api/apodAxiosInstance";
import { BackButton } from "../../../../components/BackButton";
import { CustomBottomSheetBackdrop } from "../../../../components/CustomBottomSheetBackdrop";
import { CustomBottomSheetModalBackground } from "../../../../components/CustomBottomSheetModalBackground";
import { HomeTileModal } from "../../../../components/HomeTileModal";
import { ImageActionsTab } from "../../../../components/ImageActionsTab";
import { commonStyles } from "../../../../theming/commonStyles";
import { ApodResponse } from "../../../../types/ApodResponse";
import { getYouTubeVideoId } from "../../../../utils";
import { getBottomModalSnapPoint } from "../../../../utils/getBottomModalSnapPoint";
import { ApodStackNavigationProp, ApodStackParamList } from "../../Apod.routes";
import { styles } from "./Apod.styled";
import { MobilePlatform } from "../../../../enums/MobilePlatform";

const YOUTUBE_PLAYER_HEIGHT = Dimensions.get("window").width * (9 / 16);

enum ApodScreenQueryKey {
  Apod = "apod",
}

const ApodScreen: FC = () => {
  const navigation = useNavigation<ApodStackNavigationProp>();

  const route = useRoute<RouteProp<ApodStackParamList, "ApodScreen">>();

  const { apodDate } = route.params;

  console.log(apodDate);

  const selectedApodDate = new Date(apodDate);

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleCloseModalPress = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);

  const {
    data: apodResponse,
    isLoading: isApodLoading,
    isError: isApodError,
    refetch: apodRefetch,
    isRefetching: isApodRefetching,
  } = useQuery(ApodScreenQueryKey.Apod, () => {
    if (apodDate) {
      return apodAxiosInstance.get(
        `/planetary/apod?api_key=${NASA_API_KEY}${
          !isToday(selectedApodDate) && !isFuture(selectedApodDate)
            ? "&date=" + format(selectedApodDate, "yyyy-MM-dd")
            : ""
        }`
      );
    }
  });
  if (isApodLoading || isApodRefetching) {
    return <LoadingScreen />;
  }

  const apodData: ApodResponse = apodResponse?.data;

  const apodExplanationArray = apodData.explanation.split(" ");

  return (
    <>
      <StatusBar hidden translucent={true} showHideTransition={"fade"} />
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={isApodRefetching}
            onRefresh={() => {
              apodRefetch({ queryKey: ApodScreenQueryKey.Apod });
            }}
          />
        }
        style={styles.container}
        contentContainerStyle={styles.contentContainerStyle}
      >
        <View style={styles.apodHeader}>
          <BackButton onPress={() => navigation.goBack()} />
        </View>
        {apodData.media_type === "image" ? (
          <SafeImage
            source={{
              uri: apodData.hdurl,
            }}
            defaultSource={require("../../../../../assets/images/apod-tile.webp")}
            imageStyle={styles.image}
            imageWrapperStyle={styles.imageWrapper}
          />
        ) : (
          <>
            {/* <View style={styles.youtubePlayerWhiteSpace} /> */}
            {/* <YoutubePlayer
              height={YOUTUBE_PLAYER_HEIGHT}
              videoId={getYouTubeVideoId(apodData.url)}
            /> */}
          </>
        )}
        <Typography style={styles.title}>{apodData.title}</Typography>
        <View style={styles.subheader}>
          <View style={styles.imageInfoWrapper}>
            <Typography
              style={[styles.subheaderText, styles.authorText]}
              numberOfLines={2}
              ellipsizeMode={"tail"}
            >
              Author: {apodData.copyright || "-"}
            </Typography>
            <Spacer variant={SpacerVariant.Spacer_2_Vertical} />
            <Typography style={styles.subheaderText}>
              Date: {apodData.date}
            </Typography>
          </View>
          <ImageActionsTab
            onMagnifierButtonPress={() =>
              navigation.navigate("FullImageStack", {
                screen: "FullImageScreen",
                params: {
                  photoUri: apodData.hdurl,
                  title: apodData.title,
                },
              })
            }
          />
        </View>
        <Typography style={styles.explanation} ellipsizeMode={"clip"}>
          {apodExplanationArray
            .slice(0, Platform.OS === MobilePlatform.Android ? 70 : 90)
            .join(" ")}{" "}
          {((Platform.OS === MobilePlatform.IOS &&
            apodExplanationArray.length >= 90) ||
            (Platform.OS === MobilePlatform.Android &&
              apodExplanationArray.length >= 70)) && (
            <Typography
              onPress={handlePresentModalPress}
              style={styles.readMoreButton}
            >
              read more...
            </Typography>
          )}
        </Typography>
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
          snapPoints={[getBottomModalSnapPoint(apodData.explanation.length)]}
          enableOverDrag={false}
          enableDismissOnClose={true}
        >
          <HomeTileModal
            title={apodData.title}
            description={apodData.explanation}
          />
        </BottomSheetModal>
      </ScrollView>
    </>
  );
};

export default ApodScreen;
