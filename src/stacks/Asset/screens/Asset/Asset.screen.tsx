import {
  Divider,
  DividerVariant,
  SafeImage,
  Typography,
} from "../../../../components";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { format } from "date-fns";
import React, { FC, useCallback, useRef } from "react";
import {
  Dimensions,
  Platform,
  ScrollView,
  StatusBar,
  View,
} from "react-native";
import { BackButton } from "../../../../components/BackButton";
import { CustomBottomSheetBackdrop } from "../../../../components/CustomBottomSheetBackdrop";
import { CustomBottomSheetModalBackground } from "../../../../components/CustomBottomSheetModalBackground";
import { HomeTileModal } from "../../../../components/HomeTileModal";
import { ImageActionsTab } from "../../../../components/ImageActionsTab";
import { commonStyles } from "../../../../theming/commonStyles";
import { getBottomModalSnapPoint } from "../../../../utils/getBottomModalSnapPoint";
import { styles } from "./Asset.styled";
import { MobilePlatform } from "../../../../enums/MobilePlatform";
import {
  AssetStackNavigationProp,
  AssetStackParamList,
} from "../../Asset.routes";

const YOUTUBE_PLAYER_HEIGHT = Dimensions.get("window").width * (9 / 16);

const AssetScreen: FC = () => {
  const navigation = useNavigation<AssetStackNavigationProp>();

  const route = useRoute<RouteProp<AssetStackParamList, "AssetScreen">>();

  const { asset } = route.params;

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleCloseModalPress = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);

  const apodExplanationArray = asset.data[0].description.split(" ");

  console.log(asset.data[0].date_created);

  return (
    <>
      <StatusBar hidden translucent={true} showHideTransition={"fade"} />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainerStyle}
      >
        <View style={styles.apodHeader}>
          <BackButton onPress={() => navigation.goBack()} />
        </View>
        {asset.data[0].media_type === "image" ? (
          <SafeImage
            source={{
              uri: asset.links[0].href,
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
        <Typography style={styles.title}>{asset.data[0].title}</Typography>
        <View style={styles.subheader}>
          <View style={styles.imageInfoWrapper}>
            <Typography style={styles.subheaderText}>
              Author: {asset.data[0].secondary_creator || "-"}
            </Typography>
            <Divider variant={DividerVariant.Divider_2_Vertical} />
            <Typography style={styles.subheaderText}>
              Date: {format(new Date(asset.data[0].date_created), "yyyy-MM-dd")}
            </Typography>
          </View>
          <ImageActionsTab
            onMagnifierButtonPress={() =>
              navigation.navigate("FullImageStack", {
                screen: "FullImageScreen",
                params: {
                  photoUri: asset.href,
                  title: asset.data[0].title,
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
          snapPoints={[
            getBottomModalSnapPoint(asset.data[0].description.length),
          ]}
          enableOverDrag={false}
          enableDismissOnClose={true}
        >
          <HomeTileModal
            title={asset.data[0].title}
            description={asset.data[0].description}
          />
        </BottomSheetModal>
      </ScrollView>
    </>
  );
};

export default AssetScreen;
