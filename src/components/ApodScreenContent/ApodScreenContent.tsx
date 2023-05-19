import React, { FC, useCallback, useRef } from "react";
import { Typography } from "../Typography";
import {
  Dimensions,
  Platform,
  RefreshControl,
  ScrollView,
  View,
} from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import { Vimeo } from "react-native-vimeo-iframe";
import { MobilePlatform } from "../../enums/MobilePlatform";
import { useNavigation } from "@react-navigation/native";
import { ApodStackNavigationProp } from "../../stacks/Apod/Apod.routes";
import { ApodScreenContentProps } from "./ApodScreenContent.props";
import { BackButton } from "../BackButton";
import { SafeImage } from "../SafeImage";
import { styles } from "./ApodScreenContent.styled";
import { ImageActionsTab } from "../ImageActionsTab";
import { Spacer, SpacerVariant } from "../Spacer";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { CustomBottomSheetModalBackground } from "../CustomBottomSheetModalBackground";
import { getBottomModalSnapPoint } from "../../utils/getBottomModalSnapPoint";
import { CustomBottomSheetBackdrop } from "../CustomBottomSheetBackdrop";
import { commonStyles } from "../../theming/commonStyles";
import { HomeTileModal } from "../HomeTileModal";
import { SharedElement } from "react-navigation-shared-element";
import { getYouTubeVideoId, addHttpsToUrl, getVimeoVideoId } from "../../utils";
import WebView from "react-native-webview";

const YOUTUBE_PLAYER_HEIGHT = Dimensions.get("window").width * (9 / 16);

const ApodScreenContent: FC<ApodScreenContentProps> = ({
  id,
  item,
  isApodRefreshing,
  onRefresh,
}) => {
  const navigation = useNavigation<ApodStackNavigationProp>();

  const apodExplanationArray = item.explanation.split(" ");

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleCloseModalPress = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);

  return (
    <ScrollView
      refreshControl={
        isApodRefreshing && onRefresh ? (
          <RefreshControl refreshing={isApodRefreshing} onRefresh={onRefresh} />
        ) : undefined
      }
      style={styles.container}
      contentContainerStyle={styles.contentContainerStyle}
    >
      <View style={styles.apodHeader}>
        <BackButton onPress={() => navigation.goBack()} />
      </View>
      {item.media_type === "image" ? (
        <SharedElement id={id}>
          <SafeImage
            source={{
              uri: item.url,
            }}
            defaultSource={require("../../../assets/images/apod-tile.webp")}
            imageStyle={styles.image}
            imageWrapperStyle={styles.imageWrapper}
          />
        </SharedElement>
      ) : (
        <>
          {item.url.includes("youtube") ? (
            <YoutubePlayer
              height={YOUTUBE_PLAYER_HEIGHT}
              videoId={getYouTubeVideoId(item.url)}
            />
          ) : (
            <View style={{ height: 200, backgroundColor: "red" }}>
              <Vimeo
                videoId={getVimeoVideoId(item.url)!}
                style={{ height: YOUTUBE_PLAYER_HEIGHT }}
              />
            </View>
          )}
        </>
      )}
      <Typography style={styles.title}>{item.title}</Typography>
      <View style={styles.subheader}>
        <View>
          <Typography
            style={[styles.subheaderText, styles.authorText]}
            numberOfLines={2}
            ellipsizeMode={"tail"}
          >
            Author: {item.copyright || "-"}
          </Typography>
          <Spacer variant={SpacerVariant.Spacer_2_Vertical} />
          <Typography style={styles.subheaderText}>
            Date: {item.date}
          </Typography>
        </View>
        <ImageActionsTab
          onMagnifierButtonPress={() =>
            navigation.navigate("FullImageStack", {
              screen: "FullImageScreen",
              params: {
                photoUri: item.hdurl,
                title: item.title,
              },
            })
          }
        />
      </View>
      <Typography style={styles.explanation} ellipsizeMode={"clip"}>
        {apodExplanationArray.slice(0, 70).join(" ")}{" "}
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
        snapPoints={[getBottomModalSnapPoint(item.explanation.length)]}
        enableOverDrag={false}
        enableDismissOnClose={true}
      >
        <HomeTileModal title={item.title} description={item.explanation} />
      </BottomSheetModal>
    </ScrollView>
  );
};

export default ApodScreenContent;
