import {
  Spacer,
  SpacerVariant,
  SafeImage,
  Typography,
  CustomBottomSheetBackdrop,
  CustomBottomSheetModalBackground,
  BackButton,
  HomeTileModal,
  ImageActionTab,
} from "../../../../components";
import { SharedElement } from "react-navigation-shared-element";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { format } from "date-fns";
import React, { FC, useCallback, useRef } from "react";
import { Platform, ScrollView, View } from "react-native";

import { commonStyles } from "../../../../theming/commonStyles";
import { getBottomModalSnapPoint } from "../../../../utils/getBottomModalSnapPoint";
import { styles } from "./NasaVideo.styled";
import { MobilePlatform } from "../../../../enums/MobilePlatform";
import {
  RootParamList,
  RootStackNavigationProp,
} from "../../../Root/Root.routes";

const NasaVideoScreen: FC = () => {
  const navigation = useNavigation<RootStackNavigationProp>();

  const route = useRoute<RouteProp<RootParamList, "NasaVideoScreen">>();

  const { id, item } = route.params;

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleCloseModalPress = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);

  const apodExplanationArray = item.explanation?.split(" ") ?? [];
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainerStyle}
    >
      <View style={styles.apodHeader}>
        <BackButton onPress={() => navigation.goBack()} />
      </View>
      <SharedElement id={id}>
        <SafeImage
          source={
            item.src
              ? {
                  uri: item.src,
                }
              : require("../../../../../assets/images/apod-tile.webp")
          }
          defaultSource={require("../../../../../assets/images/apod-tile.webp")}
          imageStyle={styles.image}
          imageWrapperStyle={styles.imageWrapper}
        />
      </SharedElement>
      <Typography style={styles.title}>{item.title}</Typography>
      <View style={styles.subheader}>
        <View>
          <Typography style={styles.subheaderText}>
            Author: {item.author || "-"}
          </Typography>
          <Spacer variant={SpacerVariant.Spacer_2_Vertical} />
          <Typography style={styles.subheaderText}>
            Date: {format(new Date(item.date), "yyyy-MM-dd")}
          </Typography>
        </View>
        <ImageActionTab
          type={"video"}
          onButtonPress={() =>
            navigation.navigate("SelectedVideoStack", {
              screen: "SelectedVideoScreen",
              params: {
                videoCollectionUri: item.videoUrl!,
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
      {item.explanation && (
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
          snapPoints={[getBottomModalSnapPoint(item.explanation?.length)]}
          enableOverDrag={false}
          enableDismissOnClose={true}
        >
          <HomeTileModal title={item.title} description={item.explanation} />
        </BottomSheetModal>
      )}
    </ScrollView>
  );
};

export default NasaVideoScreen;
